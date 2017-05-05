import merge from 'lodash/merge';
import webpackCommonServerConfig from './common/webpack.common.server.config';

module.exports = merge({}, webpackCommonServerConfig, {
    entry: './production.server.js',

    output: {
        filename: 'production.server.bundle.js'
    }
});