import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import Loadable from 'react-loadable';
import { Provider } from 'react-redux';
import createStore from './store';
import App from './App';

const preloadedState = window.__PRELOADED_STATE__;
const store = createStore( preloadedState );

// store.runSaga( sagas );

const render = ( Component ) => {
    ReactDOM.hydrate(
        (
            <AppContainer warnings={false}>
                <Provider store={store}>
                    <BrowserRouter>
                        <Component />
                    </BrowserRouter>
                </Provider>
            </AppContainer>
        ),
        document.getElementById( 'app' )
    );
};

const initialize = async()=> {
    // Wait til preload is ready
    await Loadable.preloadReady();

    // Initial render
    render( App );

    // Start hot reloading if in dev mode
    if ( module.hot ) {
        module.hot.accept( './App', () => {
            const nextApp = require( './App' ).default;
            render( nextApp );
        } );
    }
};

initialize();

