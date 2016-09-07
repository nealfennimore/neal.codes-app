const webpack = require('webpack');
const config  = require('../config');

module.exports = {
    target: 'node',
    resolve: {
        root: config.paths.CLIENT,
        alias: {
            containers: 'js/containers',
            reducers: 'js/reducers',
        },
        extensions: ['', '.js', '.jsx']
    },

    context: config.paths.SERVER,
    entry: './express.js',
    output: {
        path: config.paths.SERVER,
        filename: 'server.bundle.js',
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    }
};