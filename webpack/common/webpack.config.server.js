const fs = require( 'fs' );
const { resolve } = require( 'path' );
const webpack = require( 'webpack' );
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
            // Fixes SSR - use instead of webpack-node-externals
            fs.readdirSync( 'node_modules' )
                .filter( x => ! /\.bin|react-universal-component|webpack-flush-chunks/.test( x ) )
                .reduce( ( externals, mod ) => {
                    externals[mod] = `commonjs ${mod}`;
                    return externals;
                }, {} ),
            function resolveAssetsForRuntime( context, request, callback ) {
                if ( /(stats)\.json$/.test( request ) ) {
                    // Resolve `stats.json` from within dist directory at runtime
                    // Allows to build, without having to have `stats.json` in dist/assets
                    // Modifies require path to be `./assets/stats.json` from within dist
                    const manifest = request.replace( /.*\/dist/, '.' );
                    return callback( null, `commonjs ${manifest}`  );
                }
                callback();
            },
        ],
        plugins: [
            new webpack.optimize.LimitChunkCountPlugin( {
                maxChunks: 1
            } ),
        ]
    }
);
