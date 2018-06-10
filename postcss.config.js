/* eslint-disable no-unused-vars */
module.exports = ( { file, options, env } = {} ) => ( {
    plugins: {
        'postcss-import': {
            path: [
                './src/client'
            ]
        },
        'postcss-pxtorem': {
            rootValue: 16,
            propList: [ '*' ],
            selectorBlackList: [
                /^html$/,
                /^body$/
            ]
        },
        'postcss-apply': {},
        'postcss-mixins': {},
        'postcss-preset-env': {
            stage: 0
        }
    }
} );
