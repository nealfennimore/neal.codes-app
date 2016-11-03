import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import express from 'express';

import config from '../config.js';
import webpackClientConfig from '../client/webpack.client.config.babel';

const app = express();

const hotModulePath = '/__webpack_hmr';

// Add hot module reloading
if(!(webpackClientConfig.plugins instanceof Array)){ webpackClientConfig.plugins = []; }
webpackClientConfig.plugins.unshift(
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
);

// Add inline mode
Object.keys(webpackClientConfig.entry).forEach( key => {
    const entry = webpackClientConfig.entry[key];
    entry.push(
        `webpack-hot-middleware/client?path=${hotModulePath}&timeout=20000`
    );
});

const compiler = webpack(webpackClientConfig);

app.use(
    webpackHotMiddleware(compiler, {
        log: console.log,
        path: hotModulePath
    })
);

app.use(
    webpackDevMiddleware(compiler, {
        hot: true,
        quiet: false,
        noInfo: true,
        stats: { colors: true },
        publicPath: '/'
    })
);

app.listen(config.server.devPort, config.server.ip, ()=>{
    console.log('Dev watch server started on', `${config.server.ip}:${config.server.devPort}`);
});
