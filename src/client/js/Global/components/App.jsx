import 'client/styles/globals.pcss';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from 'client/js/Global/components/Layout';
import NavigationBar from 'client/js/Global/components/NavigationBar';
import Footer from 'client/js/Global/components/Footer';
import Home from 'client/js/Home';
import Posts from 'client/js/Blog/Posts';
import Tags from 'client/js/Blog/Tags';

const App = () => (
    <Layout>
        <NavigationBar />
        <Route exact path="/" component={Home} />
        <Switch>
            <Route exact path="/blog" component={Posts} />
            <Route exact path="/blog/page/:page(\d+)" component={Posts} />
            <Route exact path="/blog/tag/:slug([\w|-]+)/page/:page(\d+)" component={Tags} />
            <Route exact path="/blog/tag/:slug([\w|-]+)" component={Tags} />
            <Route exact path="/blog/:slug([\w|-]+)" component={Posts} />
        </Switch>
        <Footer />
    </Layout>
);

export default App;
