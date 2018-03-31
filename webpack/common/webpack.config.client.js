const { resolve } = require( 'path' );
const merge = require( 'webpack-merge' );
const AssetsPlugin = require( 'assets-webpack-plugin' );
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
            new AssetsPlugin( {
                path: resolve( __dirname, '../../dist/assets' )
            } )
        ]
    }
);
