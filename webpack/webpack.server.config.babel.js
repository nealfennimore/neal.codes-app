import merge from 'webpack-merge';
import webpackCommonServerConfig from './common/webpack.common.server.config.babel';

export default merge(webpackCommonServerConfig, {
    entry: './production.server.js',

    output: {
        filename: 'production.server.bundle.js'
    }
});
