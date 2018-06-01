const merge = require( 'webpack-merge' );
const config = require( '../common/webpack.config.server' );

module.exports = merge(
    config,
    {
        module: {
            rules: [
                {
                    test: /\.p?css$/,
                    include: [/\.?globals?\.?/, /node_modules/],
                    use: [
                        {
                            loader: 'css-loader/locals',
                            options: {
                                modules: false,
                                importLoaders: 1,
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
                                modules: true,
                                importLoaders: 1,
                            }
                        },
                        'postcss-loader'
                    ]
                }
            ]
        },
    }
);
