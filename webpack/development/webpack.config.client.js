const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
const mapValues = require( 'lodash/mapValues' );
const webpack = require( 'webpack' );
const merge = require( 'webpack-merge' );
const config = require( '../common/webpack.config.client' );
const { resolve } = require( 'path' );

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
        entry: {

        },
        output: {
            filename: '[name].js',
        },
        mode: 'development',
        devtool: 'cheap-module-eval-source-map',
        module: {
            rules: [
                {
                    test: /\.p?css$/,
                    use: [
                        'style-loader',
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
            new CleanWebpackPlugin( ['dist'], {root: resolve( __dirname, '../../' ) } ),
            new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        ]
    }
);
