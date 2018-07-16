const mapValues = require( 'lodash/mapValues' );
const webpack = require( 'webpack' );
const merge = require( 'webpack-merge' );
const ExtractCssChunks = require( 'extract-css-chunks-webpack-plugin' );
const config = require( '../common/webpack.config.client' );

const addHotModuleReloading = ( entry, key )=> {
    return [
        'react-hot-loader/patch',
        `webpack-hot-middleware/client?name=${ key }&reload=true`,
        ...entry
    ];
};

module.exports = merge( {
    customizeObject( a, b, key ) {
        if ( key === 'entry' ) {
            return mapValues( a, addHotModuleReloading );
        }
        return undefined;
    }
} )(
    config,
    {
        output: {
            filename: '[name].js',
        },
        mode: 'development',
        devtool: 'cheap-module-eval-source-map',
        module: {
            rules: [
                {
                    test: /\.p?css$/,
                    include: [/\.?globals?\.?/, /node_modules/],
                    use: [
                        ExtractCssChunks.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: false,
                                importLoaders: 1,
                            }
                        },
                        'postcss-loader'
                    ],
                },
                {
                    test: /\.p?css$/,
                    exclude: [/\.?globals?\.?/, /node_modules/],
                    use: [
                        ExtractCssChunks.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                importLoaders: 1,
                                localIdentName: '[name]__[local]'
                            }
                        },
                        'postcss-loader'
                    ],
                },
            ]
        },
        plugins: [
            new ExtractCssChunks( { hot: true } ),
            new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        ]
    }
);
