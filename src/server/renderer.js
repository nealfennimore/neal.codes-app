import React from 'react';
import { values, map, join, filter, pipe } from 'lodash';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from 'client/App.jsx';
import manifest from 'dist/assets/manifest.json';

const getTag = ( filterBy, template )=> pipe(
    assets => values( assets ),
    assets => filter( assets, filterBy ),
    assets => map( assets, template ),
    assets => join( assets, '\n' )
);

const scripts = getTag(
    asset => /\.js$/.test( asset ),
    asset => `<script src="${asset}" defer></script>`
)( manifest );

const styles = getTag(
    asset => /\.css$/.test( asset ),
    asset => `<link href="${asset}" rel="stylesheet" />`
)( manifest );


export default function render( req, res ) {
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
                    ${styles}
                </head>
                <body>
                    <div id="app">${html}</div>
                    ${scripts}
                </body>
            </html>
        ` );
    }
}
