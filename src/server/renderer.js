import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';
import serialize from 'serialize-javascript';
import App from 'client/App.jsx';
import createStore from 'client/store';
import preloadSaga from 'server/sagas';
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
    const preload = store.runSaga( preloadSaga );

    // Start initial render to start sagas
    // This is a throw away render
    renderMarkup( { store, context, req } );

    // End sagas that allow
    store.close();

    // Finish early if context was defined
    if( context.url ) {
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
