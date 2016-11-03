import merge from 'lodash/merge';

import webpackCommonClientConfig from './common/webpack.common.client.config.js';

import {
    paths: {DEV}, 
    regex: {VENDOR_SCSS}, 
    webpack: {cssModuleName}
} from '../config';

module.exports = merge({}, webpackCommonClientConfig, {
    output: {
        path: DEV,
        pathinfo: true
    },
    devtool: 'eval',
    plugins: null,
    module: {
        loaders: [

            // Javascript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['react-hot-loader', 'babel-loader']
            },

            // HTML
            {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]'
            },

            // CSS Locals
            {
                test: /\.scss$/,
                excludes: VENDOR_SCSS,
                loaders: [
                    'style',
                    `css?modules&importLoaders=1&sourceMap&localIdentName=${cssModuleName}`,
                    'postcss',
                    'resolve-url',
                    'sass?sourceMap'
                ]
            },

            // CSS Globals
            {
                test: VENDOR_SCSS,
                loaders: [
                    'style',
                    'css',
                    'postcss',
                    'resolve-url',
                    'sass'
                ]
            },

            // Images
            {
                test: /.*\.(gif|png|jpe?g|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack'
                ]
            },

            // Fonts
            {
                test: /\.(eot|svg|ttf|woff|woff2)\?.*$/,
                loader: 'file?name=fonts/[name].[ext]'
            }
        ]
    }
});