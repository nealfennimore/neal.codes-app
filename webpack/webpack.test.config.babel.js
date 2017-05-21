import merge from 'webpack-merge';
import nodeExternals from 'webpack-node-externals';

import webpackClientConfig from './webpack.client.config.babel';
import config from '../config';

export default merge(webpackClientConfig, {module: null}, {
    target: 'node',
    externals: [nodeExternals()],
    devtool: 'cheap-module-eval-source-map',
    plugins: null,
    module: {
        rules: [

            // Javascript
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },

            // CSS Locals
            {
                test: /\.scss$/,
                exclude: [config.regex.VENDOR_SCSS, config.regex.FONT_STYLES],
                use: [
                    'css-loader/locals?modules&importLoaders=3&localIdentName=[local]',
                    'postcss-loader',
                    'resolve-url-loader',
                    'sass-loader'
                ]
            },

            // CSS Globals
            {
                test: [config.regex.VENDOR_SCSS, config.regex.FONT_STYLES],
                use: [
                    'css-loader',
                    'postcss-loader',
                    'resolve-url-loader',
                    'sass-loader'
                ]
            },

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
                use: 'file-loader?name=fonts/[name].[ext]'
            }
        ]
    }
});