import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';
import merge from 'lodash/merge';

import webpackCommonClientConfig from './common/webpack.common.client.config.js';
import config  from '../config'

module.exports = merge({}, webpackCommonClientConfig, {

    output: {
        path: config.paths.PUBLIC
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin('[name].css'),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map',
            exclude: [
                config.regex.VENDOR_FILES,
                /html\.js$/,
                /styles\.js$/
            ]
        }),
        webpackConfig.plugins.push(
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production')
                }
            })
        );
    ],

    module: {
        loaders: [

            // Javascript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },

            // HTML
            {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]'
            },

            // App styles with CSS locals
            {
                test: /\.scss$/,
                excludes: config.regex.VENDOR_SCSS,
                loader: ExtractTextPlugin.extract('style', [
                    `css?modules&importLoaders=1&sourceMap&localIdentName=${config.webpack.cssModuleName}`,
                    'postcss',
                    'resolve-url',
                    'sass?sourceMap'
                ].join('!'))
            },

            // Vendor styles
            {
                test: config.regex.VENDOR_SCSS,
                loader: ExtractTextPlugin.extract('style', [
                    'css',
                    'postcss',
                    'resolve-url',
                    'sass'
                ].join('!'))
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
    },
    postcss: function () {
        return [autoprefixer];
    },
    imageWebpackLoader: {
        pngquant: {
            quality: '65-90',
            speed: 4
        },
        svgo: {
            plugins: [{
                removeViewBox: false
            }, {
                removeEmptyAttrs: false
            }]
        }
    }
});