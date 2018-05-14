const merge = require( 'webpack-merge' );
const config = require( '../common/webpack.config.server' );

module.exports = merge.strategy( {
    entry: 'replace'
} )(
    config,
    {
        mode: 'development',
        entry: './src/server/development/renderer.js',
        output: {
            // Needed for hot server reloading to work
            libraryTarget: 'commonjs2'
        },
        module: {
            rules: [
                {
                    test: /\.p?css$/,
                    include: [/\.?globals?\.?/, /node_modules/],
                    use: [
                        {
                            loader: 'css-loader/locals',
                            options: {
                                modules: false, // Enable CSS modules
                                importLoaders: 1, // Number of loaders before CSS loader
                            }
                        },
                        'postcss-loader'
                    ]
                },
                {
                    test: /\.p?css$/,
                    exclude: [/\.?globals?\.?/, /node_modules/],
                    use: [
                        {
                            loader: 'css-loader/locals',
                            options: {
                                modules: true, // Enable CSS modules
                                importLoaders: 1, // Number of loaders before CSS loader
                                localIdentName: '[name]__[local]'
                            }
                        },
                        'postcss-loader'
                    ]
                }
            ]
        },
    }
);
