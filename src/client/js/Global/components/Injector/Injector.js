import { compose } from 'redux';
import { SagaInjector } from '@nfen/redux-saga-injector/components';
import { ReducerInjector } from '@nfen/redux-reducer-injector/components';

const injector = ( options )=> compose(
    SagaInjector( options ),
    ReducerInjector( options ),
);

export default injector;
