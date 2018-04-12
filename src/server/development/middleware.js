const webpack = require( 'webpack' );
const webpackDevMiddleware = require( 'webpack-dev-middleware' );
const webpackHotMiddleware = require( 'webpack-hot-middleware' );
const webpackHotServerMiddleware = require( 'webpack-hot-server-middleware' );
const configs = require( '../../../webpack/development' );

module.exports = function middleware( app ) {
    const compiler = webpack( configs );
    const clientCompiler = compiler.compilers[0];

    app.use(
        webpackDevMiddleware( compiler, {
            quiet: false,
            noInfo: true,
            stats: { colors: true },
            publicPath: configs[0].output.publicPath,
            watchOptions: {
                aggregateTimeout: 300,
            },
            ignored: /node_modules/,
            serverSideRender: true
        } )
    );

    app.use(
        webpackHotMiddleware( clientCompiler, {
            quiet: false,
            noInfo: true,
            path: '/__webpack_hmr',
            timeout: 20000
        } )
    );

    app.use( webpackHotServerMiddleware( compiler ) );
};
