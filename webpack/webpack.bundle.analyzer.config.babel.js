import merge from 'webpack-merge';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import webpackClientConfig from './webpack.client.config.babel';

export default merge(webpackClientConfig, {
    plugins: [
        new BundleAnalyzerPlugin()
    ]
});