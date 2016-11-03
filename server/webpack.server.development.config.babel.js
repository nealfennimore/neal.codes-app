import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';
import config from '../config';

var serverWebpackConfig =  {
    name: 'server',
    target: 'node',
    context: config.paths.SERVER,

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

    // externals: [nodeExternals()],

    entry: './development.server.js',

    output: {
        path: config.paths.SERVER,
        filename: 'development.server.bundle.js'
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

module.exports = serverWebpackConfig;
