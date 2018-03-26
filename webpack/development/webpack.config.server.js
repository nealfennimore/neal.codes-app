const merge = require( 'webpack-merge' );
const config = require( '../common/webpack.config.server' );

module.exports = merge(
    config,
    {
        mode: 'development',
        output: {
            filename: '[name].js',
        },
    }
);
