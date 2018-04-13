const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const merge = require( 'webpack-merge' );
const config = require( '../common/webpack.config.client' );

module.exports = merge.strategy( {
    'module.rules': 'append',
    'plugins': 'append'
} )(
    config,
    {
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.p?css$/,
                    use: ExtractTextPlugin.extract( {
                        fallback: {
                            loader: 'style-loader',
                            options: {
                                hmr: false
                            }
                        },
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: true,
                                    importLoaders: 1,
                                    minimize: true,
                                    sourceMap: true
                                }
                            },
                            'postcss-loader'
                        ]
                    } )
                }
            ]
        },
        optimization: {
            splitChunks: {
                chunks: 'all',
                minSize: 0,
                maxAsyncRequests: Infinity,
                maxInitialRequests: Infinity,
                name: true,
                cacheGroups: {
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true,
                    },
                    vendor: {
                        name: 'vendor',
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10,
                        reuseExistingChunk: true,
                    }
                },
            },
        },
        plugins: [
            new ExtractTextPlugin( {
                filename: '[name].[contenthash].css',
            } ),
        ]
    }
);
