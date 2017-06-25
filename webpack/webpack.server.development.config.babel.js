import webpack from 'webpack';
import merge from 'webpack-merge';
import webpackCommonServerConfig from './common/webpack.common.server.config.babel';

export default merge(webpackCommonServerConfig, {
    entry: './development.server.js',

    output: {
        filename: 'development.server.bundle.js'
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                watchOptions: {
                    aggregateTimeout: 10 * 1000
                }
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
                NODE_BUILD: JSON.stringify('server'),
                NODE_TLS_REJECT_UNAUTHORIZED: JSON.stringify('0')
            }
        })
    ]
});
