import { delay } from 'redux-saga';
import { call, take, race } from 'redux-saga/effects';
import debug from 'debug';
import * as actions from 'client/actions/sagas';
import { runSagas } from 'client/sagas';

const log = debug( 'server:sagas' );

export default function* preloadSaga() {
    try {
        const result = yield race( {
            action: take( actions.RUN_SAGAS ),
            timeout: call( delay, 100 ),
        } );

        log( 'saga result: %o', result );

        if( result.action ) {
            const run = yield call( runSagas, result.action );
            log( 'saga run: %o', run );
        }
    } catch ( error ) {
        log( error );
    }
}
