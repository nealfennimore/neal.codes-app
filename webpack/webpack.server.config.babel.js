import merge from 'webpack-merge';
import webpackCommonServerConfig from './common/webpack.common.server.config';

export default merge(webpackCommonServerConfig, {
    entry: './production.server.js',

    output: {
        filename: 'production.server.bundle.js'
    }
});