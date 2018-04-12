import path from 'path';
import express from 'express';
import { __DEV__ } from 'shared/env';

const app = express();

// NOTE: Loading like this prevents `import` syntax errors in dev mode
const middleware = __DEV__
    ? require( './development/middleware' )
    : require( './production/middleware' );

middleware( app );

const { PORT, HOSTNAME, NODE_ENV } = process.env;
app.listen( PORT, HOSTNAME, ()=>{
    console.log( 'Starting %s server @ %s:%d', NODE_ENV, HOSTNAME, PORT ); // eslint-disable-line no-console
} );
