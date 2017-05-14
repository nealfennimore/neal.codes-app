import { call, put, take, takeLatest } from 'redux-saga/effects'
import { Promise } from 'bluebird';
import merge from 'lodash/merge';
import { queryParams } from 'shared/blog';
import blogService from 'services/blog';

export const REQUEST_TAGS = 'REQUEST_TAGS';
export const RECEIVE_TAGS = 'RECEIVE_TAGS';

export function* fetchTags(action){
    try {
        const { slug, page } = action;
        const params = merge({}, queryParams, {
            params: {
                filter: `tags:[${slug}]`,
                page:   Number(page) || 1
            }
        });
        const tags = yield call(blogService.posts, params);
        yield put({type: RECEIVE_TAGS, tags, slug});
    } catch (e) {

    }
}

export default function* tagsSaga(){
    yield takeLatest(REQUEST_TAGS, fetchTags);
}