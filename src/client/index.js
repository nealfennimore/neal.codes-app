import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import Loadable from 'react-loadable';
import App from './App';

const render = ( Component ) => {
    ReactDOM.hydrate(
        (
            <AppContainer warnings={false}>
                <BrowserRouter>
                    <Component />
                </BrowserRouter>
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

