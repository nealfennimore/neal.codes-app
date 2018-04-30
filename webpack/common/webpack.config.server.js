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
                                emitFile: false,
                                name: 'assets/images/[name].[ext]'
                            }
                        }
                    ]
                },
            ]
        },
        externals: [
            nodeExternals(),
            function resolveAssetsForRuntime( context, request, callback ) {
                if ( /(react-loadable|webpack-assets)\.json$/.test( request ) ) {
                    // Resolve `react-loadable.json` or `webpack-assets.json` from within dist directory at runtime
                    // Allows to build, without having to have `react-loadable.json` in dist/assets
                    // Modifies require path to be `./assets/react-loadable.json` from within dist
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
