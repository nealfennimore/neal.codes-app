/* eslint-disable no-unused-vars */
module.exports = ( { file, options, env } = {} ) => ( {
	plugins: {
		'postcss-import': {
			path: [
				'./src/styles'
			]
		},
		'postcss-pxtorem': {
			rootValue: 16,
			propList: [ '*' ]
		},
		'postcss-cssnext': {}
	}
} );
