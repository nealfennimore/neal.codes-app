import { delay } from 'redux-saga';
import { call, take, all, race, takeEvery } from 'redux-saga/effects';
import debug from 'debug';
import * as actions from 'client/actions/sagas';

const log = debug( 'client:sagas' );

export function* runAll( sagas ) {
    log( 'sagas to run: %o', sagas );
    return yield all(
        sagas.map( saga => call( saga ) )
    );
}

export function* runSagas( action ) {
    try {
        const result = yield race( {
            sagas: call( runAll, action.sagas ),
            cancelled: take( actions.CANCEL_SAGAS ),
            timeout: call( delay, 5000 ),
        } );

        log( 'run saga result: %o', result );

    } catch ( error ) {
        log( 'error while running sagas: %o', error );
    }
}

export function* clientSaga() {
    yield takeEvery( actions.RUN_SAGAS, runSagas );
}

export default clientSaga;
