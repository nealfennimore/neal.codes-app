const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config  = require('../config');

const webpackConfig = require('../webpack.config');

// Add hot module reloading
webpackConfig.plugins.unshift(new webpack.HotModuleReplacementPlugin());

// Add inline mode
Object.keys(webpackConfig.entry).forEach( key => {
    const entry = webpackConfig.entry[key];
    entry.unshift(
        `webpack-dev-server/client?${config.server.protocol}://${config.server.hostname}/`,
        'webpack/hot/dev-server'
    );
});

const compiler = webpack(webpackConfig);
const server = new WebpackDevServer(compiler, {
    // webpack-dev-server options
    contentBase: './dev',
    hot: true,
    host: config.server.ip,

    // Enable special support for Hot Module Replacement
    // Page is no longer updated, but a 'webpackHotUpdate' message is send to the content
    // Use 'webpack/hot/dev-server' as additional module in your entry point
    // Note: this does _not_ add the `HotModuleReplacementPlugin` like the CLI option does.

    // Set this as true if you want to access dev server from arbitrary url.
    // This is handy if you are using a html5 router.
    historyApiFallback: false,

    // Set this if you want to enable gzip compression for assets
    compress: true,

    // Set this if you want webpack-dev-server to delegate a single path to an arbitrary server.
    // Use '**' to proxy all paths to the specified server.
    // This is useful if you want to get rid of 'http://localhost:8080/' in script[src],
    // and has many other use cases (see https://github.com/webpack/webpack-dev-server/pull/127 ).
    // proxy: {
    //     '**': 'http://docker.local'
    // },

    setup: function(app) {
        // Here you can access the Express app object and add your own custom middleware to it.
        // For example, to define custom handlers for some paths:
        // app.get('/some/path', function(req, res) {
        //   res.json({ custom: 'response' });
        // });
    },

    // webpack-dev-middleware options
    quiet: false,
    noInfo: true,
    stats: { colors: true }
});

server.listen(config.server.port, config.server.ip, function() {
    console.log('Starting webpack dev server', config.server.port);
});