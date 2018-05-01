import { spawn } from 'redux-saga/effects';
import { clientRunner } from '@nealfennimore/redux-saga-injector';

export default function* rootSaga() {
    yield spawn( clientRunner );
}
