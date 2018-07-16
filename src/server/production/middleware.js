const { resolve } = require( 'path' );
const express = require( 'express' );
const clientStats = require( 'dist/assets/stats.json' ); // eslint-disable-line
const render = require( '../renderer' ).default;

module.exports = function middleware( app ) {
    app.use( '/assets', express.static( resolve( __dirname, 'assets' ) ) );
    app.get( '*', render( { clientStats } ) );
};
