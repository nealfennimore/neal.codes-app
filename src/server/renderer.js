import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';
import serialize from 'serialize-javascript';
import App from 'client/App.jsx';
import createStore from 'client/store';
import {
    getBundleTags,
    manifest,
    scripts,
    styles
} from './assets';
import waitForSagas from './utils/sagas';

const Application = ( {
    store,
    req,
    context
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

const renderInitial = ( {
    splitModules,
    store,
    req,
    context
} )=> (
    ReactDOMServer.renderToStaticMarkup(
        <Loadable.Capture report={moduleName => splitModules.push( moduleName )}>
            <Application
                store={store}
                context={context}
                req={req}
            />
        </Loadable.Capture>
    )
);

const renderMarkup = ( args )=> (
    ReactDOMServer.renderToString(
        <Application {...args} />
    )
);

export default async function render( req, res ) {
    const store = createStore();
    const context = {};
    const splitModules = [];

    renderInitial( {store, context, splitModules, req} );

    store.close();
    await store.runSaga( waitForSagas( {} ) ).done;


    const html = renderMarkup( { store, context, req } );
    const bundle = getBundleTags( splitModules );

    if( context.url ) {
        res.redirect( 301, context.url );
    } else {
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
}
