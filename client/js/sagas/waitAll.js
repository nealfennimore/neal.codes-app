import { call, all } from 'redux-saga/effects';

const waitAll = (sagas) => function* () {
    yield all(
        sagas.map( args => call(...args) )
    );
};

export default waitAll;