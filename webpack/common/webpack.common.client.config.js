import webpack from 'webpack';
import merge from 'lodash/merge';

import webpackCommon from './webpack.common.config.js';
import {
    paths: {CLIENT}
} from '../../config';

module.exports = merge({}, webpackCommon, {
    name: 'client',
    target: 'web',
    context: CLIENT,

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
        path: null
    },

    plugins: null
});