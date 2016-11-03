import merge from 'lodash/merge';

import webpackCommonServerConfig from './common/webpack.common.server.config.js';

module.exports = merge({}, webpackCommonServerConfig, {
    entry: './development.server.js',

    output: {
        filename: './build/development.server.bundle.js'
    }
});
