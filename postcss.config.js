/* eslint-disable no-unused-vars */
module.exports = ( { file, options, env } = {} ) => ( {
    plugins: {
        'postcss-import': {
            path: [
                './src/client'
            ]
        },
        'postcss-pxtorem': {
            rootValue: 18,
            propList: [ '*' ],
            selectorBlackList: [
                /^html$/,
                /^body$/
            ]
        },
        'postcss-cssnext': {}
    }
} );
