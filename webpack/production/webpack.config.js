const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const merge = require( 'webpack-merge' );
const config = require( '../common/webpack.config' );
const { resolve } = require( 'path' );

module.exports = merge(
    config,
    {
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
        plugins: [
            new CleanWebpackPlugin( ['dist'], {root: resolve( __dirname, '../../' ) } ),
            new ExtractTextPlugin( {
                filename: '[name].[contenthash].css',
            } ),
        ]
    }
);
