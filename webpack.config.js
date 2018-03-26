const { NODE_ENV } = process.env;

let config;
if( NODE_ENV === 'development' ) {
    config = require( './webpack/development' );
} else {
    config = require( './webpack/production' );
}

module.exports = config;
