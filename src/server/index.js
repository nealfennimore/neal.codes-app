import path from 'path';
import express from 'express';
import React from 'react';
import { values, map, join } from 'lodash';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from 'client/App.jsx';
import { __DEV__ } from 'shared/env';
import manifest from 'dist/assets/manifest.json';
import injectDevMiddleware from './develop';

const scripts = join( map( values( manifest ), asset => `<script src="${asset}" defer></script>` ), '\n' );

const app = express();

if ( __DEV__ ) {
    injectDevMiddleware( app );
} else {
    app.use( '/assets', express.static( path.resolve( __dirname, 'assets' ) ) );
}

app.get( '*', ( req, res ) => {
    const context = {};

    const html = ReactDOMServer.renderToString(
        <StaticRouter
            location={req.url}
            context={context}
        >
            <App />
        </StaticRouter>
    );

    if ( context.url ) {
        res.redirect( 301, context.url );
    } else {
        res.send( `
            <!DOCTYPE html>
            <html>
                <head>
                </head>
                <body>
                    <div id="app">${html}</div>
                    ${scripts}
                </body>
            </html>
        ` );
    }
} );

const { PORT, HOSTNAME, NODE_ENV } = process.env;
app.listen( PORT, HOSTNAME, ()=>{
    console.log( 'Starting %s server @ %s:%d', NODE_ENV, HOSTNAME, PORT ); // eslint-disable-line no-console
} );
