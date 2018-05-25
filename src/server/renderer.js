import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';
import { Helmet } from 'react-helmet';
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
    const html = renderApp( { store, context, modules, req } );

    // Get dynamic bundles from code splits needed for this render
    const bundle = getBundleTags( modules );

    const helmet = Helmet.renderStatic();

    res.send( `
        <!DOCTYPE html>
        <html ${helmet.htmlAttributes.toString()}>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link href="https://google.com/favicon.ico" rel="icon" />

                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                ${helmet.link.toString()}

                ${bundle.styles}
                ${styles}
                ${manifest}

                <script>
                    (function(d) {
                    var config = {
                        kitId: 'ppk4ako',
                        scriptTimeout: 3000,
                        async: true
                    },
                    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
                    })(document);
                </script>
            </head>
            <body ${helmet.bodyAttributes.toString()}>
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
