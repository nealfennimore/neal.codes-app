const webpack = require( 'webpack' );
const merge = require( 'webpack-merge' );
const ExtractCssChunks = require( 'extract-css-chunks-webpack-plugin' );
const config = require( '../common/webpack.config.client' );

module.exports = merge.strategy( {
    entry: 'prepend'
} )(
    config,
    {
        entry: [
            'react-hot-loader/patch',
            'webpack-hot-middleware/client?reload=true',
        ],
        output: {
            filename: '[name].js',
        },
        mode: 'development',
        devtool: 'cheap-module-eval-source-map',
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
                    ],
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
                                localIdentName: '[name]__[local]'
                            }
                        },
                        'postcss-loader'
                    ],
                },
            ]
        },
        plugins: [
            new ExtractCssChunks( { hot: true } ),
            new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        ]
    }
);
