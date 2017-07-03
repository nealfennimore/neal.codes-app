import { call, put, takeEvery } from 'redux-saga/effects';
import get from 'lodash/get';
import clientStore from 'client/store';

export const INJECT_REDUCER = 'INJECT_REDUCER';
export function syncReducer({key, reducer}){
    return {
        type: INJECT_REDUCER,
        key,
        reducer
    };
}

export const INJECT_REDUCER_SUCCESS = 'INJECT_REDUCER_SUCCESS';
export const INJECT_REDUCER_ERROR = 'INJECT_REDUCER_ERROR';

export function* injectReducer({key, reducer}, args){
    const store = get(args, 'store', clientStore.instance);
    try {
        yield call(store.injectReducer, key, reducer);
        yield put({ type: INJECT_REDUCER_SUCCESS, key, reducer });
    } catch (e) {
        console.warn(e);
        yield put({ type: INJECT_REDUCER_ERROR, key, reducer });
    }
}

export default function* watchForInject(){
    yield takeEvery(INJECT_REDUCER, injectReducer);
}
