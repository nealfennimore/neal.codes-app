import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from 'client/App.jsx';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import stats from 'dist/assets/react-loadable.json';
import {
    getBundleScriptTags,
    getBundleStyleTags,
    getScriptTags,
    getStyleTags,
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

    const bundles = getBundles( stats, splitModules );
    const bundleScripts = getBundleScriptTags( bundles );
    const bundleStyles = getBundleStyleTags( bundles );
    const scripts = getScriptTags( stats, bundles );
    const styles = getStyleTags( stats, bundles );

    if ( context.url ) {
        res.redirect( 301, context.url );
    } else {
        res.send( `
            <!DOCTYPE html>
            <html>
                <head>
                    ${bundleStyles}
                    ${styles}
                </head>
                <body>
                    <div id="app">${html}</div>
                    ${bundleScripts}
                    ${scripts}
                </body>
            </html>
        ` );
    }
}
