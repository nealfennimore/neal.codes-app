const { resolve } = require( 'path' );
const nodeExternals = require( 'webpack-node-externals' );
const merge = require( 'webpack-merge' );
const common = require( './webpack.config' );

module.exports = merge(
    common,
    {
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
                if ( /manifest\.json$/.test( request ) ) {
                    // This will be resolved at runtime when `server.js` is run within the dist folder
                    const manifest = request.replace( /.*\/dist/, '.' );
                    return callback( null, `commonjs ${manifest}`  );
                }
                callback();
            }
        ],
    }
);
