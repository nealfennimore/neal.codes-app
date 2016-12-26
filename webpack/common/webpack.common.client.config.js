import merge from 'lodash/merge';

import webpackCommon from './webpack.common.config.js';
import config from '../../config';

module.exports = merge({}, webpackCommon, {
    name: 'client',
    target: 'web',
    context: config.paths.CLIENT,

    entry: {
        app: [
            './app'
        ],

        fonts: [
            './fonts/style.scss'
        ],

        vendor: [
            'react',
            'react-dom',
            'react-router',
            'react-router-redux',
            'redux',
            'redux-thunk',
            'bluebird',
            'superagent',
            './scss/vendor/vendor.scss',
            './lib/highlight.js'
        ]
    },

    output: {
        filename: '[name].js',
        chunkFilename: '[id].js',
        path: null
    },

    plugins: null
});