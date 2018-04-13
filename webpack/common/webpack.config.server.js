const { resolve } = require( 'path' );
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
            function resolveReactHotLoaderAssets( context, request, callback ) {
                if ( /react-loadable\.json$/.test( request ) ) {
                    // Resolve `react-loadable.json` from within dist directory at run time
                    // Allows to build, without having to have `react-loadable.json` in dist/assets
                    // Modifies require path to be `./assets/react-loadable.json` from within dist
                    const manifest = request.replace( /.*\/dist/, '.' );
                    return callback( null, `commonjs ${manifest}`  );
                }
                callback();
            }
        ]
    }
);
