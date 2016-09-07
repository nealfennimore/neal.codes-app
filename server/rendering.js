import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from 'reducers';
import App from 'containers';

import { renderToString } from 'react-dom/server';

function renderFullPage(html, preloadedState) {
    return `
        <!doctype html>
        <html>
            <head>
                <meta charset="utf-8">
                <title></title>
                <link rel="stylesheet" href="/vendorStyles.css" media="screen" title="Vendor styles" charset="utf-8">
                <link rel="stylesheet" href="/app.css" media="screen" title="App styles" charset="utf-8">
            </head>
            <body>
                <div id="app">${html}</div>
                <script>
                    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
                </script>
                <script src="/vendor.js"></script>
                <script src="/app.js"></script>
            </body>
        </html>
    `;
}

export default function handleRender(req, res) {
    // Create a new Redux store instance
    const store = createStore(reducers);

    // Render the component to a string
    const html = renderToString(
        <Provider store={store}>
            <App />
        </Provider>
    );

    // Grab the initial state from our Redux store
    const preloadedState = store.getState();

    // Send the rendered page back to the client
    res.send(renderFullPage(html, preloadedState));
}