const { resolve } = require( 'path' );
const merge = require( 'webpack-merge' );
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
            new ReactLoadablePlugin( {
                filename: './dist/assets/react-loadable.json',
            } )
        ]
    }
);
