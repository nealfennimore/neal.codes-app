const merge = require( 'webpack-merge' );
const config = require( './production/webpack.config.client' );
const { BundleAnalyzerPlugin } = require( 'webpack-bundle-analyzer' );

module.exports = merge.strategy( {
    plugins: 'append'
} )(
    config,
    {
        plugins: [
            new BundleAnalyzerPlugin()
        ]
    }
);
