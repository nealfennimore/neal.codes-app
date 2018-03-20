const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
const webpack = require( 'webpack' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const merge = require( 'webpack-merge' );
const config = require( '../common/webpack.config' );
const { resolve } = require( 'path' );

module.exports = merge(
    config,
    {
        output: {
            filename: '[name].js',
        },
        devServer: {
            contentBase: resolve( __dirname, '../../dist' ),
            compress: true,
            port: 3001,
            hot: true
        },
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
            new HtmlWebpackPlugin( {
                title: 'Cryptotrack',
                template: require( 'html-webpack-template' ),
                appMountId: 'root',
                filename: 'index.html'
            } ),
            new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin()
        ]
    }
);
