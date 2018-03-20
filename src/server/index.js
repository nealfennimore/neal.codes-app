import path from 'path';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from '../client/App';

const app = express();

app.use( '/assets', express.static( path.resolve( __dirname, 'assets' ) ) );

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
                    <script src="/assets/app.js"></script>
                </body>
            </html>
        ` );
    }
} );

const PORT = 3000;
app.listen( PORT, ()=>{
    console.log( 'Starting production server', 3000 ); // eslint-disable-line no-console
} );
