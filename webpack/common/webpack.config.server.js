const { resolve } = require( 'path' );
const webpack = require( 'webpack' );
const nodeExternals = require( 'webpack-node-externals' );
const merge = require( 'webpack-merge' );
const common = require( './webpack.config' );

module.exports = merge(
    common,
    {
        name: 'server',
        target: 'node',
        node: {
            __dirname: false,
            __filename: false,
        },
        output: {
            path: resolve( __dirname, '../../dist' ),
            publicPath: '/',
            filename: '[name].js',
        },
        entry: {
            server: [
                './src/server/index.js',
            ]
        },
        externals: [
            nodeExternals(),
            function resolveAssetManifest( context, request, callback ) {
                if ( /webpack-assets\.json$/.test( request ) ) {
                    // This will be resolved at runtime when `server.js` is run within the dist folder
                    const manifest = request.replace( /.*\/dist/, '.' );
                    return callback( null, `commonjs ${manifest}`  );
                }
                callback();
            }
        ],
        plugins: [
            new webpack.optimize.LimitChunkCountPlugin( {
                maxChunks: 1
            } )
        ]
    }
);
