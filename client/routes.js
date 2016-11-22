import React from 'react'
import {Router, Route, IndexRoute} from 'react-router';
import { Layout, Home, Blog } from 'containers';

// Fixes HMR by not recreating routes
// https://github.com/reactjs/react-router-redux/issues/179#issuecomment-241771171
const ROUTES = (
    <Route path='/' component={Layout}>
        <IndexRoute component={Home} />
        <Route path='blog' component={Blog} />
    </Route>
);

export default function({history}) {
    return (
        <Router history={history}>
            {ROUTES}
        </Router>
    );
}