import 'client/styles/globals.pcss';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import withAnalytics from 'client/js/Global/hoc/GoogleAnalytics';
import Layout from 'client/js/Global/components/Layout';
import NavigationBar from 'client/js/Global/components/NavigationBar';
import Footer from 'client/js/Global/components/Footer';
import Home from 'client/js/Home';
import Projects from 'client/js/Projects';
import Posts from 'client/js/Blog/Posts';
import Post from 'client/js/Blog/Post';
import Tags from 'client/js/Blog/Tags';

const App = () => (
    <Layout>
        <NavigationBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" render={Projects} />
        <Switch>
            {/* ─── BLOG ─────────────────────────────────────────────────────────────────────── */}
            <Route exact path="/blog" render={Posts} />
            <Route exact path="/blog/page/:page(\d+)" render={Posts} />

            {/* ─── TAGS ─────────────────────────────────────────────────────────────────────── */}
            <Route exact path="/blog/tag/:slug([\w|-]+)" render={Tags} />
            <Route exact path="/blog/tag/:slug([\w|-]+)/page/:page(\d+)" render={Tags} />

            {/* ─── POST ─────────────────────────────────────────────────────────────────────── */}
            <Route exact path="/blog/:slug([\w|-]+)" render={Post} />
        </Switch>
        <Footer />
    </Layout>
);

export default withAnalytics( App );
