const { resolve } = require( 'path' );
const merge = require( 'webpack-merge' );
const ManifestPlugin = require( 'webpack-manifest-plugin' );
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
            new ManifestPlugin()
        ]
    }
);
