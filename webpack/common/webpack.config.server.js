const { resolve } = require( 'path' );
const nodeExternals = require( 'webpack-node-externals' );

module.exports = {
    target: 'node',
    node: {
        __dirname: false,
        __filename: false,
    },
	context: resolve( __dirname, '../../' ),
	entry: {
		server: [
			'./src/server/index.js',
		]
	},
	output: {
		filename: '[name].js',
		chunkFilename: '[id]-[chunkhash].js',
		path: resolve( __dirname, '../../dist' ),
		publicPath: '/'
	},
	resolve: {
		extensions: [ '.js', '.jsx', '.json', '.pcss' ]
    },
    externals: [
        nodeExternals()
    ],
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
