import webpack from 'webpack';
import merge from 'lodash/merge';

import webpackCommon from './webpack.common.config.js';
import config from '../../config';

module.exports = merge({}, webpackCommon, {
    target: 'node',
    name: 'server',
    node: {
        __dirname: true // superagent fix: https://github.com/visionmedia/superagent/wiki/SuperAgent-for-Webpack
    },
    context: config.paths.SERVER,

    entry: null,
    output: {
        path: config.paths.SERVER,
        filename: null
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: false,
            sourceMap: true,
            beautify: true
        }),
        new webpack.DefinePlugin({ 'global.GENTLY': false }) // superagent fix: https://github.com/visionmedia/superagent/wiki/SuperAgent-for-Webpack
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.scss$/,
                loader: `css-loader/locals?modules&importLoaders=1&localIdentName=${config.webpack.cssModuleName}`
            }
        ]
    }
});