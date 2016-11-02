require.extensions['.scss'] = () => { return; };

import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';
import merge from 'lodash/merge';

import config  from '../config';

const isDev = process.env.NODE_ENV === 'development';

var webpackConfig =  {
    target: 'node',

    devtool: 'eval',

    context: config.paths.CLIENT,

    resolve: {
        root: config.paths.CLIENT,
        alias: {
            styles: 'scss',
            scripts: 'js',
            containers: 'js/containers',
            reducers: 'js/reducers',
            utils: 'js/utils'
        },
        extensions: ['', '.js', '.jsx', '.scss']
    },

    entry: {
        app: ['./app'],

        vendor: [
            'react',
            'react-dom'
        ],
        vendorStyles: ['./scss/vendor/vendor.scss']
    },

    output: {
        filename: '[name].js',
        chunkFilename: '[id].js',
        path: config.paths.DEV,
        pathinfo: true
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        })
    ],

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
                excludes: config.regex.VENDOR_SCSS,
                loaders: [
                    'style',
                    'css?modules&importLoaders=1&sourceMap&localIdentName=[path][name]-[local]_[hash:base64:5]',
                    'postcss',
                    'resolve-url',
                    'sass'
                ]
            },

            // CSS Globals
            {
                test: config.regex.VENDOR_SCSS,
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
};

console.log(webpackConfig);
module.exports = webpackConfig;
