import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import merge from 'webpack-merge';

import webpackCommonClientConfig from './common/webpack.common.client.config';
import config from '../config';


module.exports = merge(webpackCommonClientConfig, {

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

            // App styles with CSS locals
            {
                test: /\.scss$/,
                exclude: [config.regex.VENDOR_SCSS, config.regex.FONT_STYLES],
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                minimize: true,
                                importLoaders: 3,
                                sourceMap: true,
                                localIdentName: config.webpack.cssModuleName
                            }
                        },
                        'postcss-loader',
                        'resolve-url-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            }
                        }
                    ]
                })
            },

            // Vendor styles
            {
                test: [config.regex.VENDOR_SCSS, config.regex.FONT_STYLES],
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true
                            }
                        },
                        'postcss-loader',
                        'resolve-url-loader',
                        'sass-loader'
                    ]
                })
            }
        ]
    }
});