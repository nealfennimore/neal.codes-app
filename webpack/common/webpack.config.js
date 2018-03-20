const { resolve } = require( 'path' );

module.exports = {
	context: resolve( __dirname, '../../' ),
	entry: {
		app: [
			'./src/client/index.js',
		]
	},
	output: {
		filename: '[name].js',
		chunkFilename: '[id]-[chunkhash].js',
		path: resolve( __dirname, '../../dist/assets' ),
		publicPath: '/assets'
	},
	resolve: {
		extensions: [ '.js', '.jsx', '.json', '.pcss' ]
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: [ 'babel-loader', ],
				exclude: /node_modules/
            }
		]
    }
};
