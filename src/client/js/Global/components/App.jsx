import 'client/styles/globals.pcss';
import React from 'react';
import { Route } from 'react-router-dom';
import Layout from 'client/js/Global/components/Layout';
import NavigationBar from 'client/js/Global/components/NavigationBar';
import Footer from 'client/js/Global/components/Footer';
import Home from 'client/js/Home';
import Posts from 'client/js/Blog/Posts';

const App = () => (
    <Layout>
        <NavigationBar />
        <Route exact path="/" component={Home} />
        <Route path="/blog" component={Posts} />
        <Footer />
    </Layout>
);

export default App;
