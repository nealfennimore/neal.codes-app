import merge from 'lodash/merge';

import webpackCommon from './webpack.common.config.js';
import config from '../../config';

module.exports = merge({}, webpackCommon, {
    name: 'client',
    target: 'web',
    context: config.paths.CLIENT,

    entry: {
        app: ['./app'],

        vendor: [
            'react',
            'react-dom',
            'react-router',
            'react-router-redux',
            'redux',
            'redux-thunk',
            'bluebird',
            'superagent'

        ],
        vendorStyles: ['./scss/vendor/vendor.scss']
    },

    output: {
        filename: '[name].js',
        chunkFilename: '[id].js',
        path: null
    },

    plugins: null
});