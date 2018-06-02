const { resolve } = require( 'path' );
const merge = require( 'webpack-merge' );
const Dotenv = require( 'dotenv-webpack' );
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
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
            new CopyWebpackPlugin( [
                { from: './src/client/images/favicon.ico', to: 'favicon.ico' }
            ] ),
            AssetsPlugin,
            ReactLoadablePlugin
        ]
    }
);
