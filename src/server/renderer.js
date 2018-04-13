import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from 'client/App.jsx';
import Loadable from 'react-loadable';
import {
    getBundleTags,
    scripts,
    styles
} from './assets';

export default function render( req, res ) {
    const context = {};
    const splitModules = [];

    const html = ReactDOMServer.renderToString(
        <Loadable.Capture report={moduleName => splitModules.push( moduleName )}>
            <StaticRouter
                location={req.url}
                context={context}
            >
                <App />
            </StaticRouter>
        </Loadable.Capture>
    );

    const bundle = getBundleTags( splitModules );

    if ( context.url ) {
        res.redirect( 301, context.url );
    } else {
        res.send( `
            <!DOCTYPE html>
            <html>
                <head>
                    ${bundle.styles}
                    ${styles}
                </head>
                <body>
                    <div id="app">${html}</div>
                    ${bundle.scripts}
                    ${scripts}
                </body>
            </html>
        ` );
    }
}
