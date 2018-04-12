import path from 'path';
import express from 'express';
import { __DEV__ } from 'shared/env';
import injectDevMiddleware from './develop';
// import render from './renderer';

const app = express();

if ( __DEV__ ) {
    injectDevMiddleware( app );
} else {
    // app.use( '/assets', express.static( path.resolve( __dirname, 'assets' ) ) );
    // app.get( '*', render );
}


const { PORT, HOSTNAME, NODE_ENV } = process.env;
app.listen( PORT, HOSTNAME, ()=>{
    console.log( 'Starting %s server @ %s:%d', NODE_ENV, HOSTNAME, PORT ); // eslint-disable-line no-console
} );
