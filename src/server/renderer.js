import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';
import { preloadQueue } from '@nfen/redux-saga-injector';
import serialize from 'serialize-javascript';
import App from 'client/js/Global/components/App.jsx';
import createStore from 'client/js/store';
import {
    getBundleTags,
    manifest,
    scripts,
    styles
} from './assets';

const Application = ( {
    context,
    req,
    store,
} )=> (
    <Provider store={store}>
        <StaticRouter
            location={req.url}
            context={context}
        >
            <App />
        </StaticRouter>
    </Provider>
);

const renderApp = ( {
    modules,
    ...rest
} )=> (
    ReactDOMServer.renderToString(
        <Loadable.Capture report={moduleName => modules.push( moduleName )}>
            <Application {...rest} />
        </Loadable.Capture>
    )
);

const renderMarkup = ( args )=> (
    ReactDOMServer.renderToStaticMarkup(
        <Application {...args} />
    )
);

export default async function render( req, res ) {
    const store = createStore();
    const context = {};
    const modules = [];

    // Server saga listens for any injected sagas to finish
    const preload = store.runSaga( preloadQueue );

    // Start initial render to start sagas
    // This is a throw away render
    renderMarkup( { store, context, req } );

    // Finish early if context was defined
    if( context.url ) {
        // End in progress sagas as we'll never finish render
        store.close();
        return res.redirect( 301, context.url );
    }

    // Proceed after preload saga finishes
    await preload.done;

    // Get markup with updated store
    const html = renderApp( {store, context, modules, req} );

    // Get dynamic bundles from code splits needed for this render
    const bundle = getBundleTags( modules );

    res.send( `
        <!DOCTYPE html>
        <html>
            <head>
                ${bundle.styles}
                ${styles}
                ${manifest}
                <link href="https://google.com/favicon.ico" rel="icon" />
            </head>
            <body>
                <div id="app">${html}</div>
                <script>
                    window.__PRELOADED_STATE__ = ${ serialize( store.getState(), { isJSON: true } ) };
                </script>
                ${bundle.scripts}
                ${scripts}
            </body>
        </html>
    ` );
}
