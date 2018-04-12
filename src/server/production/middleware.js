const { resolve } = require( 'path' );
const express = require( 'express' );
const render = require( '../renderer' );

module.export = function middleware( app ) {
    app.use( '/assets', express.static( resolve( __dirname, 'assets' ) ) );
    app.get( '*', render );
};
