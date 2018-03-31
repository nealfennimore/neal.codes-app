import React from 'react';
import { pick, map, join, filter, pipe } from 'lodash';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from 'client/App.jsx';
import webpackAssets from 'dist/assets/webpack-assets.json';

const getTag = ( bundles, filterBy, template )=> pipe(
    assets => pick( assets, bundles ),
    assets => filter( assets, filterBy ),
    assets => map( assets, filterBy ),
    assets => map( assets, template ),
    assets => join( assets, '\n' )
);

const scripts = getTag(
    ['vendor', 'app'],
    asset => asset.js,
    asset => `<script src="${asset}" defer></script>`
)( webpackAssets );

const styles = getTag(
    ['vendor', 'app'],
    asset => asset.css,
    asset => `<link href="${asset}" rel="stylesheet" />`
)( webpackAssets );


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
