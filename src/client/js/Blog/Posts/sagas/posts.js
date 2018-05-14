import { call, put, take, takeLatest, cancel } from 'redux-saga/effects';
import get from 'lodash/get';
import { __SERVER__ } from 'shared/env';
import {
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_ERROR,
    FETCH_POSTS
} from 'client/js/Blog/Posts/actions/posts';
import * as service from 'client/js/Blog/Posts/services/posts';


export function* fetchPosts( { page } ) {
    const options = {
        params: {
            limit: 3,
            include: 'tags',
            page,
            formats: 'plaintext,html'
        }
    };

    try {
        const { data } = yield call( service.getPosts, options );
        yield put( { type: FETCH_POSTS_SUCCESS, data } );
    } catch ( e ) {
        yield put( { type: FETCH_POSTS_ERROR } );
    }
}

export function* postsFlow( { blog, params } ) {
    const page        = get( params, 'page', 1 );
    const currentPage = get( blog, 'posts.meta.pagination.page' );

    if( page != currentPage  ) {
        yield call( fetchPosts, { page } );
    }
}

export default function* postsSaga() {
    const task = yield takeLatest( FETCH_POSTS, postsFlow );
    if( __SERVER__ ) {
        yield take( [FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR]
        );
        yield cancel( task );
    }
}
