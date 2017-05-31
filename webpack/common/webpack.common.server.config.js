import webpack from 'webpack';
import merge from 'webpack-merge';
import nodeExternals from 'webpack-node-externals';

import webpackCommon from './webpack.common.config.babel';
import config from '../../config';

export default merge(webpackCommon, {
    target: 'node',
    name: 'server',
    node: {
        __dirname: true // superagent fix: https://github.com/visionmedia/superagent/wiki/SuperAgent-for-Webpack
    },
    context: config.paths.SERVER,

    entry: null,
    output: {
        path: config.paths.SERVER + '/build',
        filename: null
    },

    externals: [
        nodeExternals()
    ],

    plugins: [
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/), // Use only the en locale from momentjs
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false
        }),
        new webpack.DefinePlugin({ 'global.GENTLY': false }) // superagent fix: https://github.com/visionmedia/superagent/wiki/SuperAgent-for-Webpack
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: `css-loader/locals?modules&importLoaders=1&localIdentName=${config.webpack.cssModuleName}`
            },
            {
                test: config.regex.IMAGE_FILES,
                exclude: [config.regex.FONT_FILES],
                use: [
                    'file-loader?emitFile=false&name=images/[name].[ext]',
                    'image-webpack-loader'
                ]
            },

        ]
    }
});