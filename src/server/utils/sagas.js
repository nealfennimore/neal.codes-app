import { call, all } from 'redux-saga/effects';
import { compose } from 'lodash';

const waitAll = ( sagas ) => function* () {
    yield all(
        sagas.map( args => call( ...args ) )
    );
};

function getPreloaders( { components = [], ...rest } ) {
    return components
        .filter( ( component ) => component && component.preload )
        .map( ( component ) => component.preload( rest ) )
        .reduce( ( result, preloader ) => result.concat( preloader ), [] );
}

const waitForSagas = compose( waitAll, getPreloaders );
export default waitForSagas;
