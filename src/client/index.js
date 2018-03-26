import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';


const render = ( Component ) => {
    ReactDOM.hydrate( (
        <AppContainer warnings={false}>
            <BrowserRouter>
                <Component />
            </BrowserRouter>
        </AppContainer>
    ),
        document.getElementById( 'app' )
    );
};

render( App );

if ( module.hot ) {
	module.hot.accept( './App', () => {
		const nextApp = require( './App' ).default;
		render( nextApp );
	} );
}


