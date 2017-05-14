import { call, put, takeLatest } from 'redux-saga/effects'
import blogService from 'services/blog';
import { setPageParams } from 'shared/blog';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export function* fetchPosts(action){
    try {
        const params = setPageParams(action.page);
        const posts = yield call(blogService.posts, params);
        yield put({type: RECEIVE_POSTS, posts});
        return posts;
    } catch (e) {
        // yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

export default function* postsSaga(){
    yield takeLatest(REQUEST_POSTS, fetchPosts);
}