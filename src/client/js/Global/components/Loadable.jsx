import React, { Component } from 'react';
import Loadable from 'react-loadable';

const LoadableBar = Loadable( {
    loader: () => import( './Test' ),
    loading() {
        return <div>Loading...</div>;
    },
    delay: 3000
} );

/* eslint-disable react/prefer-stateless-function */
export default class MyComponent extends Component {
    render() {
        return <LoadableBar />;
    }
}
