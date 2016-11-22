import webpack from 'webpack';
import merge from 'lodash/merge';

import webpackCommon from './webpack.common.config.js';
import config from '../../config';

module.exports = merge({}, webpackCommon, {
    target: 'node',
    name: 'server',
    context: config.paths.SERVER,

    entry: null,
    output: {
        path: config.paths.SERVER,
        filename: null
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({ 'global.GENTLY': false }) // Fixes superagent not bundling... https://github.com/visionmedia/superagent/issues/672#issuecomment-153408805
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