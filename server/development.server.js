import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import express from 'express';

import handleRender from './rendering';
import webpackConfig from '../client/webpack.client.config';
import config from '../config';

const app = express();

const hotModulePath = '/__webpack_hmr';

// Add hot module reloading
if(!(webpackConfig.plugins instanceof Array)){ webpackConfig.plugins = []; }
webpackConfig.plugins.unshift(
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
);

// Add inline mode
Object.keys(webpackConfig.entry).forEach( key => {
    const entry = webpackConfig.entry[key];
    entry.push(
        `webpack-hot-middleware/client?path=${hotModulePath}&timeout=20000`
    );
});

const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
    hot: true,
    quiet: false,
    noInfo: true,
    stats: { colors: true },
    publicPath: '/'
}));
app.use(webpackHotMiddleware(compiler, {
    log: console.log,
    path: hotModulePath
}));

app.get('/', handleRender);

app.listen(config.server.port, config.server.ip, ()=>{
    console.log('Dev server started on', config.server.port);
});