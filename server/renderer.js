import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { RouterContext } from 'react-router';
import { Helmet } from 'react-helmet';
import compose from 'lodash/fp/compose';

import configureStore from 'client/store';
import { waitForSagas } from './utils/sagas';
import page from 'server/templates/page';

function renderMarkup(store, renderProps){
    return renderToString(
        <Provider store={store}>
            <RouterContext {...renderProps} />
        </Provider>
    );
}

export default function handleRender({res, renderProps, next}) {
    // Create a new Redux store instance
    const store = configureStore();

    store.runSaga(
        waitForSagas(renderProps)
    ).done
        .then(()=> {
            // Second render
            const content = renderMarkup(store, renderProps);
            const helmet = Helmet.renderStatic();

            // Grab the initial state from our Redux store
            const initialState = store.getState();

            // Send the rendered page back to the client
            res.send(
                page({
                    helmet,
                    content,
                    initialState
                })
            );
        })
        .catch( err => {
            console.error(err);
            const status = err.status || 404;
            res.redirect(`/${status}`);
        });

    // Do first render, start initial actions
    renderMarkup(store, renderProps);
    // Dispatch END event to stop sagas after they're done loading
    store.close();
}