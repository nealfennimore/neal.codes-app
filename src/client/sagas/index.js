import { delay } from 'redux-saga';
import { call, take, all, race, takeEvery } from 'redux-saga/effects';
import debug from 'debug';
import * as actions from 'client/actions/sagas';

const log = debug( 'client:sagas' );

export function* waitAll( sagas ) {
    return yield all(
        sagas.map( saga => call( saga ) )
    );
}

export function* runSagas( action ) {
    return yield race( {
        sagas: call( waitAll, action.sagas ),
        cancelled: take( actions.CANCEL_SAGAS ),
        timeout: call( delay, 10000 ),
    } );
}

export function* clientSaga() {
    yield takeEvery( actions.RUN_SAGAS, runSagas );
}

export default clientSaga;
