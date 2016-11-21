import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { RouterContext } from 'react-router'

import reducers from 'reducers';
import App from 'containers';
import page from './page';


export default function handleRender(res, renderProps) {
    // Create a new Redux store instance
    const store = createStore(reducers);

    // Render the component to a string
    const content = renderToString(
        <Provider store={store}>
            <RouterContext {...renderProps} />
        </Provider>
    );

    // Grab the initial state from our Redux store
    const initialState = store.getState();

    // Send the rendered page back to the client
    res.send(
        page({
            content,
            initialState
        })
    );
}