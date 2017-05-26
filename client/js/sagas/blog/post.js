import { call, put, takeLatest } from 'redux-saga/effects';
import get from 'lodash/get';
import find from 'lodash/find';
import blogService from 'services/blog';

export const REQUEST_POST = 'REQUEST_POST';
export const RECEIVE_POST = 'RECEIVE_POST';
export const GET_POST = 'GET_POST';
export const SET_POST = 'SET_POST';

export function* fetchPost(action){
    yield put({type: REQUEST_POST});
    const params = {
        slug: action.slug,
        params: {include: 'tags'}
    };

    try {
        const { posts } = yield call(blogService.postBySlug, params);
        yield put({type: RECEIVE_POST, posts});
    } catch (e) {
        //
    }
}

export function* postFlow({blog, params }){
    const slug = get(params, 'slug');
    const isActive = get(blog, 'post.slug', false) === slug;
    const posts = get(blog, 'posts.posts', []);
    const post = !isActive ? find(posts, p => p.slug === slug) : false;

    if(post && !isActive){
        yield put({ type: SET_POST, posts: [post] });
    } else if(!post && !isActive) {
        yield call(fetchPost, {slug});
    }
}


export default function* postSaga(){
    yield takeLatest(GET_POST, postFlow);
}