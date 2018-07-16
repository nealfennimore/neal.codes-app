const merge = require( 'webpack-merge' );
const ExtractCssChunks = require( 'extract-css-chunks-webpack-plugin' );
const StatsPlugin = require( 'stats-webpack-plugin' );
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
                    include: [/\.?globals?\.?/, /node_modules/],
                    use: [
                        ExtractCssChunks.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: false,
                                importLoaders: 1,
                            }
                        },
                        'postcss-loader'
                    ]
                },
                {
                    test: /\.p?css$/,
                    exclude: [/\.?globals?\.?/, /node_modules/],
                    use: [
                        ExtractCssChunks.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                importLoaders: 1,
                            }
                        },
                        'postcss-loader'
                    ]
                }
            ]
        },
        optimization: {
            splitChunks: {
                chunks: 'async',
                minSize: 30000,
                minChunks: 1,
                maxAsyncRequests: 5,
                maxInitialRequests: 3,
                automaticNameDelimiter: '~',
                name: true,
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10
                    },
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true
                    }
                }
            }
        },
        plugins: [
            new ExtractCssChunks(),
            new StatsPlugin( 'stats.json' ),
        ]
    }
);
