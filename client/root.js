import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';

import Routes from 'shared/routes';

const Root = ({store, history}) => {
    return (
        <Provider store={store}>
            <Routes history={history} />
        </Provider>
    );
};

Root.propTypes = {
    store: PropTypes.shape({}).isRequired,
    history: PropTypes.shape({}).isRequired
};

export default Root;
