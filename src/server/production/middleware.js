const { resolve } = require( 'path' );
const express = require( 'express' );
const render = require( '../renderer' ).default;

module.exports = function middleware( app ) {
    app.use( '/assets', express.static( resolve( __dirname, 'assets' ) ) );
    app.get( '*', render );
};
