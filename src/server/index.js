import 'babel-polyfill';
import express from 'express';
import { __DEV__ } from 'shared/env';

const app = express();

// NOTE: Loading like this prevents `import` syntax errors in dev mode
const middleware = __DEV__
    ? require( './development/middleware' )
    : require( './production/middleware' );

middleware( app );

const { VIRTUAL_PORT, LISTEN_HOSTNAME, NODE_ENV } = process.env;
app.listen( VIRTUAL_PORT, LISTEN_HOSTNAME, ()=>{
    console.log( 'Starting %s server @ %s:%d', NODE_ENV, LISTEN_HOSTNAME, VIRTUAL_PORT ); // eslint-disable-line no-console
} );
