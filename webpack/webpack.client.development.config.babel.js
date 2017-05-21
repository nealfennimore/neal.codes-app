import webpack from 'webpack';
import merge from 'webpack-merge';

import webpackCommonClientConfig from './common/webpack.common.client.config.js';
import config from '../config';

module.exports = merge(webpackCommonClientConfig, {
    output: {
        path: config.paths.DEV,
        pathinfo: true
    },
    devtool: 'eval',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        })
    ],
    module: {
        rules: [

            // Javascript
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },

            // HTML
            {
                test: /\.html$/,
                use: 'file-loader?name=[name].[ext]'
            },

            // CSS Locals
            {
                test: /\.scss$/,
                exclude: [config.regex.VENDOR_SCSS, config.regex.FONT_STYLES],
                use: [
                    'style-loader',
                    `css-loader?modules&importLoaders=3&sourceMap&localIdentName=${config.webpack.cssModuleName}`,
                    'postcss-loader',
                    'resolve-url-loader',
                    'sass-loader?sourceMap'
                ]
            },

            // CSS Globals
            {
                test: [config.regex.VENDOR_SCSS, config.regex.FONT_STYLES],
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'resolve-url-loader',
                    'sass-loader'
                ]
            },

            // Project Images
            {
                test: config.regex.PROJECT_IMAGE_FILES,
                exclude: [config.regex.FONT_FILES],
                use: [
                    'responsive-loader'
                ]
            },

            // Fonts
            {
                test: config.regex.FONT_FILES,
                use: 'file-loader?name=/fonts/[name].[ext]'
            }
        ]
    }
});