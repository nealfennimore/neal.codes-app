import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';
import configs from '../../webpack/development';

export default function injectDevMiddleware( app ) {
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
}
