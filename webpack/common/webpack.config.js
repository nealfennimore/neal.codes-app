const { resolve } = require( 'path' );

module.exports = {
	context: resolve( process.env.PWD ),
	output: {
		filename: '[name].js',
		chunkFilename: '[id]-[chunkhash].js'
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
