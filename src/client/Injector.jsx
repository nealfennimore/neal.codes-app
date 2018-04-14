import React, { Component } from 'react';
import { connect } from 'react-redux';
import { curry, defaultsDeep } from 'lodash';
import PropTypes from 'prop-types';
import * as actions from './actions/sagas';

const storeKey = 'store';
const contextTypes = {
    [ storeKey ]: PropTypes.object
};

const propTypes = {
    cancelSagas: PropTypes.func.isRequired,
    runSagas: PropTypes.func.isRequired,
};

const connector = connect(
    null,
    dispatch => ( {
        runSagas: ( sagas ) => dispatch( actions.runSagas( sagas ) ),
        cancelSagas: () => dispatch( actions.cancelSagas() )
    } )
);

function InjectorHOC( options, WrappedComponent ) {
    const { sagas, reducers } = defaultsDeep( options, { sagas: [], reducers: [] } );

    const componentName = WrappedComponent.displayName ||
	WrappedComponent.name ||
	'Component';

    class Injector extends Component {
        static displayName = `Injector(${ componentName })`
        static propTypes = propTypes
        static contextTypes = contextTypes

        constructor( props, context ) {
            super( props, context );
            this.store = props[ storeKey ] || context[ storeKey ];

            this.hasInjected = {
                sagas: false,
                reducers: false
            };
        }

        componentWillMount() {
            this.injectReducers();
            this.injectSagas();
        }

        componentWillUnmount() {
            this.props.cancelSagas();
        }

        injectSagas() {
            if ( sagas.length && ! this.hasInjected.sagas ) {
                this.props.runSagas( sagas );
                this.hasInjected.sagas = true;
            }
        }

        injectReducers() {
            if ( reducers.length && ! this.hasInjected.reducers ) {
                reducers.forEach( ( reducer ) => this.store.injectReducer( reducer ) );
                this.hasInjected.reducers = true;
            }
        }

        render() {
            return (
                <WrappedComponent {...this.props} />
            );
        }
    }

    return connector( Injector );
}

export default curry( InjectorHOC );
