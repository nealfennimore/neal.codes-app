import { delay } from 'redux-saga';
import { call } from 'redux-saga/effects';

export function* saga() {
    const duration = 1000;
    yield call( delay, duration );
    console.log( 'delay: %d', duration );
}

export function* saga1() {
    const duration = 2000;
    yield call( delay, duration );
    console.log( 'delay: %d', duration );
}

export function* saga2() {
    const duration = 3000;
    yield call( delay, duration );
    console.log( 'delay: %d', duration );
}
