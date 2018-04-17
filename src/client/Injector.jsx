import React, { Component } from 'react';
import { curry, defaults } from 'lodash';
import PropTypes from 'prop-types';
import * as actions from './actions/sagas';

const STORE_KEY = 'store';

function InjectorHOC( options, WrappedComponent ) {
    const { sagas, reducers } = defaults( options, { sagas: [], reducers: [] } );

    const componentName = WrappedComponent.displayName ||
	WrappedComponent.name ||
    'Component';

    class Injector extends Component {
        static displayName = `Injector(${ componentName })`
        static propTypes = {
            cancelSagas: PropTypes.func.isRequired,
            runSagas: PropTypes.func.isRequired,
        }
        static contextTypes = {
            [ STORE_KEY ]: PropTypes.object
        }

        state = {
            injectedSagas: false,
            injectedReducers: false,
        }

        sagas = sagas
        reducers = reducers

        componentWillMount() {
            this.injectReducers();
            this.injectSagas();
        }

        componentWillUnmount() {
            this.store.dispatch( actions.cancelSagas() );
        }

        get store() {
            return this.props[STORE_KEY] || this.context[STORE_KEY];
        }

        get hasSagas() {
            return !! this.sagas.length;
        }

        get hasReducers() {
            return !! this.reducers.length;
        }

        get hasInjectedSagas() {
            return this.state.injectedSagas;
        }

        get hasInjectedReducers() {
            return this.state.injectedReducers;
        }

        set hasInjectedSagas( injectedSagas ) {
            this.setState( {injectedSagas} );
        }

        set hasInjectedReducers( injectedReducers ) {
            this.setState( {injectedReducers} );
        }

        injectSagas() {
            if ( this.hasSagas && ! this.hasInjectedSagas ) {
                this.store.dispatch( actions.runSagas( sagas ) );
                this.hasInjectedSagas = true;
            }
        }

        injectReducers() {
            if ( this.hasReducers && ! this.hasInjectedReducers ) {
                this.reducers.forEach( reducer => this.store.injectReducer( reducer ) );
                this.hasInjectedReducers = true;
            }
        }

        render() {
            return (
                <WrappedComponent {...this.props} />
            );
        }
    }

    return Injector;
}

export default curry( InjectorHOC );
