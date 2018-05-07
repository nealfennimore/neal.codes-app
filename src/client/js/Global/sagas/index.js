import { sagaRunner } from '@nfen/redux-saga-injector';
import { spawn } from 'redux-saga/effects';

export default function* rootSaga() {
    yield spawn( sagaRunner );
}
