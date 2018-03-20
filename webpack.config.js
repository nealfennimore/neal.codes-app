const { NODE_ENV } = process.env;

let config;
if( NODE_ENV === 'development' ) {
    config = require( './webpack/development/webpack.config' );
} else {
    config = require( './webpack/production/webpack.config' );
}

module.exports = config;
