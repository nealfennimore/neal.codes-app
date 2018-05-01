import { call, put, takeLatest } from 'redux-saga/effects';
import get from 'lodash/get';
import find from 'lodash/find';
import {
    REQUEST_POST,
    RECEIVE_POST,
    SET_POST,
    GET_POST
} from 'client/js/Blog/Post/actions/post';
import * as service from 'client/js/Blog/Post/services/post';


export function* fetchPost( action ) {
    yield put( {type: REQUEST_POST} );

    try {
        const { data } = yield call( service.getPost, action.slug, {
            params: {include: 'tags'}
        } );
        yield put( {type: RECEIVE_POST, posts: data.posts} );
    } catch ( e ) {
        //
    }
}

export function* postFlow( {blog, params } ) {
    const slug = get( params, 'slug' );
    const isActive = get( blog, 'post.slug', false ) === slug;
    const posts = get( blog, 'posts.posts', [] );
    const post = ! isActive ? find( posts, p => p.slug === slug ) : false;

    if( post && ! isActive ) {
        yield put( { type: SET_POST, posts: [post] } );
    } else if( ! post && ! isActive ) {
        yield call( fetchPost, {slug} );
    }
}


export default function* postSaga() {
    yield takeLatest( GET_POST, postFlow );
}
