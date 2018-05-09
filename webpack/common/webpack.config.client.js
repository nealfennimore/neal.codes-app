const { resolve } = require( 'path' );
const merge = require( 'webpack-merge' );
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
const Dotenv = require( 'dotenv-webpack' );
const common = require( './webpack.config' );
const ReactLoadablePlugin = require( '../plugins/react-loadable' );
const AssetsPlugin = require( '../plugins/assets-webpack-plugin' );

module.exports = merge(
    common,
    {
        name: 'client',
        output: {
            path: resolve( __dirname, '../../dist/assets' ),
            publicPath: '/assets/'
        },
        entry: {
            app: [
                './src/client/js/index.js',
            ],
            vendor: [
                'react'
            ]
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    use: [ 'babel-loader', ],
                    exclude: /node_modules/
                },
                // Images
                {
                    test: /.*\.(gif|png|jpe?g|svg)$/i,
                    exclude: [
                        /fonts\/.*\.(eot|svg|ttf|woff2?)(\?.*)?$/,
                    ],
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                emitFile: true,
                                name: 'images/[name].[ext]'
                            }
                        },
                        {
                            loader: 'image-webpack-loader'
                        }
                    ]
                },
                // Fonts
                {
                    test: /fonts\/.*\.(eot|svg|ttf|woff2?)(\?.*)?$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                emitFile: true,
                                name: 'fonts/[name].[ext]'
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new Dotenv(),
            new CleanWebpackPlugin( ['dist/*.js', 'dist/assets/*'], {
                root: resolve( __dirname, '../../' ),
                exclude:  ['react-loadable.json', 'webpack-assets.json'],
            } ),
            AssetsPlugin,
            ReactLoadablePlugin
        ]
    }
);
