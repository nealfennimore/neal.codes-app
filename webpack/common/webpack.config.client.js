const { resolve } = require( 'path' );
const merge = require( 'webpack-merge' );
const AssetsPlugin = require( 'assets-webpack-plugin' );
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
const ReactLoadablePlugin = require( 'react-loadable/webpack' ).ReactLoadablePlugin;
const common = require( './webpack.config' );

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
                './src/client/index.js',
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
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin( ['dist/*.js', 'dist/assets/*'], {
                root: resolve( __dirname, '../../' ),
                exclude:  ['react-loadable.json'],
            } ),
            new AssetsPlugin( {
                path: resolve( __dirname, '../../dist/assets' )
            } ),
            new ReactLoadablePlugin( {
                filename: './dist/assets/react-loadable.json',
            } )
        ]
    }
);
