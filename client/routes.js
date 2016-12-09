import React, { PropTypes } from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import { Layout, Home, Blog } from 'containers';
import { Post, Tags } from 'components/blog';
import { NotFound } from 'components/common';

// Fixes HMR by not recreating routes
// https://github.com/reactjs/react-router-redux/issues/179#issuecomment-241771171
const ROUTES = (
    <Route path='/' component={Layout}>
        <IndexRoute component={Home} />
        <Route path='blog(/page/:page)' component={Blog}>
            <Route path='tag/:slug(/page/:tagPage)' component={Tags} />
            <Route path=':slug' component={Post} />
        </Route>
        <Route path='*' status={404} component={NotFound} />
    </Route>
);

export default function Routes({history}) {
    return (
        <Router history={history}>
            {ROUTES}
        </Router>
    );
}

Routes.propTypes = {
    history: PropTypes.object
};