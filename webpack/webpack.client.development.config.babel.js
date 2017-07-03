import webpack from 'webpack';
import merge from 'webpack-merge';

import webpackCommonClientConfig from './common/webpack.common.client.config.babel';
import config from '../config';

export default merge(webpackCommonClientConfig, {
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

            // CSS Locals
            {
                test: /\.scss$/,
                exclude: [config.regex.VENDOR_SCSS, config.regex.FONT_STYLES],
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
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
            }
        ]
    }
});
