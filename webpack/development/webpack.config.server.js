const merge = require( 'webpack-merge' );
const config = require( '../common/webpack.config.server' );

module.exports = merge(
    config,
    {
        mode: 'development',
        module: {
            rules: [
                {
                    test: /\.p?css$/,
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
