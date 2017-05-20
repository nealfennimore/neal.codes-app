import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import merge from 'lodash/merge';

import webpackCommonClientConfig from './common/webpack.common.client.config.js';
import config from '../config';

module.exports = merge({}, webpackCommonClientConfig, {

    output: {
        path: config.paths.PUBLIC
    },

    plugins: [
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/), // Use only the en locale from momentjs
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin('[name].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: ({context}) => /node_modules/.test(context)
        }),
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map',
            append: '\n//# sourceMappingURL=/[url]',
            exclude: [
                config.regex.VENDOR_FILES,
                /html\.js$/,
                /styles\.js$/
            ]
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
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

            // App styles with CSS locals
            {
                test: /\.scss$/,
                exclude: [config.regex.VENDOR_SCSS, config.regex.FONT_STYLES],
                use: ExtractTextPlugin.extract({
                    use: [
                        `css-loader?modules&importLoaders=3&sourceMap&localIdentName=${config.webpack.cssModuleName}`,
                        'postcss-loader',
                        'resolve-url-loader',
                        'sass-loader?sourceMap'
                    ]
                })
            },

            // Vendor styles
            {
                test: [config.regex.VENDOR_SCSS, config.regex.FONT_STYLES],
                use: ExtractTextPlugin.extract({
                    use: [
                        'css-loader',
                        'postcss-loader',
                        'resolve-url-loader',
                        'sass-loader'
                    ]
                })
            },

            // Images
            // {
            //     test: config.regex.IMAGE_FILES,
            //     exclude: config.regex.FONT_FILES,
            //     use: [
            //         'file?hash=sha512&digest=hex&name=images/[hash].[ext]',
            //         'image-webpack'
            //     ]
            // },

            {
                test: config.regex.PROJECT_IMAGE_FILES,
                exclude: [config.regex.FONT_FILES],
                use: [
                    // 'file?hash=sha512&digest=hex&name=images/projects/[hash].[ext]',
                    // 'image-webpack',
                    'responsive-loader'
                ]
            },

            // Fonts
            {
                test: config.regex.FONT_FILES,
                loader: 'file-loader?name=/fonts/[name].[ext]'
            }
        ]
    }
});
