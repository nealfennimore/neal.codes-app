import webpack from 'webpack';
import config from '../config';

module.exports = {
    target: 'node',
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

    context: config.paths.SERVER,
    entry: './production.server.js',
    output: {
        path: config.paths.SERVER,
        filename: 'production.server.bundle.js',
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.scss$/,
                loader: 'css-loader/locals?modules&importLoaders=1&localIdentName=[path][name]-[local]'
            }
        ]
    }
};