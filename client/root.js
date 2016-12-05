import React from 'react';
import { Provider } from 'react-redux';

import Routes from 'client/routes';

const Root = ({store, history}) => {
    return (
        <Provider store={store}>
            <Routes history={history} />
        </Provider>
    );
};

export default Root;