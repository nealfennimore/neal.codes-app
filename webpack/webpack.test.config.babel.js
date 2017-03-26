import merge from 'lodash/merge';
import nodeExternals from 'webpack-node-externals';

import webpackClientConfig from './webpack.client.config.babel.js';
import config from '../config';

export default merge({}, webpackClientConfig, {
    target: 'node',
    externals: [nodeExternals()],
    devtool: 'cheap-module-eval-source-map',
    plugins: null,
    module: {
        loaders: [

            // Javascript
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },

            // CSS Locals
            {
                test: /\.scss$/,
                exclude: [config.regex.VENDOR_SCSS, config.regex.FONT_STYLES],
                loaders: [
                    'style',
                    `css?modules&importLoaders=3&sourceMap&localIdentName=${config.webpack.cssModuleName}`,
                    'postcss',
                    'resolve-url',
                    'sass?sourceMap'
                ]
            },

            // CSS Globals
            {
                test: [config.regex.VENDOR_SCSS, config.regex.FONT_STYLES],
                loaders: [
                    'style',
                    'css',
                    'postcss',
                    'resolve-url',
                    'sass'
                ]
            },

            {
                test: config.regex.PROJECT_IMAGE_FILES,
                exclude: [config.regex.FONT_FILES],
                loaders: [
                    'responsive'
                ]
            },

            // Fonts
            {
                test: config.regex.FONT_FILES,
                loader: 'file?name=fonts/[name].[ext]'
            }
        ]
    }
});