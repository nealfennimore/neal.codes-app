import webpack from 'webpack';
import merge from 'webpack-merge';
import autoprefixer from 'autoprefixer';
import webpackCommon from './webpack.common.config.babel';
import config from '../../config';

export default merge.strategy(
    'resolve.alias': 'append'
)(webpackCommon, {
    name: 'client',
    target: 'web',
    context: config.paths.CLIENT,

    resolve: {
        alias: {
            routes: 'shared/routes/asynchronous'
        }
    },

    entry: {
        app: [
            './app'
        ],

        fonts: [
            './fonts/style.scss'
        ],

        vendor: [
            './scss/vendor/vendor.scss',
            './lib/highlight.js'
        ]
    },

    output: {
        filename: '[name].js',
        chunkFilename: '[id].js',
        publicPath: '/',
        path: null
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer()
                ]
            }
        })
    ],

    module: {
        rules: [
            // Images
            {
                test: config.regex.IMAGE_FILES,
                exclude: [config.regex.FONT_FILES],
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            emitFile: true,
                            name: 'images/[name].[ext]'
                        }
                    },
                    {
                        loader: 'image-webpack-loader'
                    }
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
