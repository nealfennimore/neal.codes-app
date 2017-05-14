import { call, put, takeLatest } from 'redux-saga/effects'
import merge from 'lodash/merge';
import get from 'lodash/get';
import { queryParams } from 'shared/blog';
import blogService from 'services/blog';

export const GET_TAGS = 'GET_TAGS';
export const REQUEST_TAGS = 'REQUEST_TAGS';
export const RECEIVE_TAGS = 'RECEIVE_TAGS';

export function* fetchTags({slug, page}){
    try {
        yield put({type: REQUEST_TAGS });
        const params = merge({}, queryParams, {
            params: {
                filter: `tags:[${slug}]`,
                page:   Number(page) || 1
            }
        });
        const tags = yield call(blogService.tags, params);
        yield put({type: RECEIVE_TAGS, tags, slug});
    } catch (e) {
        //
    }
}

function* tagsFlow({blog, params: { slug, tagPage=1 }}){
    const posts = get(blog, `tags.${slug}`, false);
    const page  = get(posts, 'meta.pagination.page');

    if( !(posts && page == tagPage) ){
        yield call(fetchTags, {slug, page: tagPage});
    }
}

export default function* tagsSaga(){
    yield takeLatest(GET_TAGS, tagsFlow);
}