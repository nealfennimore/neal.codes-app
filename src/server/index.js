import 'babel-polyfill';
import express from 'express';
import { __DEV__ } from 'shared/env';

const app = express();

// NOTE: Loading like this prevents `import` syntax errors in dev mode
const middleware = __DEV__
    ? require( './development/middleware' )
    : require( './production/middleware' );

middleware( app );

const { PORT, IP_ADDR, NODE_ENV } = process.env;
app.listen( PORT, IP_ADDR, ()=>{
    console.log( 'Starting %s server @ %s:%d', NODE_ENV, IP_ADDR, PORT ); // eslint-disable-line no-console
} );
