import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import configs from '../../webpack/development';

export default function injectDevMiddleware( app ) {
    configs.slice( 0,1 ).forEach( config => {
        const compiler = webpack( config );

        app.use(
            webpackDevMiddleware( compiler, {
                quiet: false,
                noInfo: true,
                stats: { colors: true },
                publicPath: config.output.publicPath,
                watchOptions: {
                    aggregateTimeout: 300,
                },
                ignored: /node_modules/
            } )
        );

        app.use(
            webpackHotMiddleware( compiler, {
                name: config.name,
                quiet: false,
                noInfo: true,
                path: '/__webpack_hmr',
                timeout: 20000
            } )
        );
    } );
}
