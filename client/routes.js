import React, { PropTypes } from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import { Layout, Home, Blog, Posts, Post, Tags } from 'containers';
import Projects from 'client/js/routes/Projects';
import { NotFound } from 'components/common';
import { logPageView } from 'lib/googleAnalytics';

// Fixes HMR by not recreating routes
// https://github.com/reactjs/react-router-redux/issues/179#issuecomment-241771171
const ROUTES = (
    <Route path='/' component={Layout}>
        <IndexRoute component={Home} />

        <Route path='blog(/page/:page)' component={Blog}>
            <IndexRoute component={Posts} />
            <Route path='tag/:slug(/page/:tagPage)' component={Tags} />
            <Route path=':slug' component={Post} />
        </Route>

        <Route path='/projects' component={Projects} />

        <Route path='*' status={404} component={NotFound} />
    </Route>
);

export default function Routes({history}) {
    return (
        <Router history={history} onUpdate={logPageView}>
            {ROUTES}
        </Router>
    );
}

Routes.propTypes = {
    history: PropTypes.shape({}).isRequired
};
