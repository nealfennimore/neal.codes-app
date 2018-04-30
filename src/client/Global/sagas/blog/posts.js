import { call, put, takeLatest } from 'redux-saga/effects';
// import blogService from 'services/blog';
// import { setPageParams } from 'shared/blog';
import get from 'lodash/get';

export const POSTS = 'POSTS';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export function* fetchPosts( {page} ) {
    yield put( { type: REQUEST_POSTS } );
    // const params = setPageParams( page );

    // try {
    //     const posts = yield call( blogService.posts, params );
    //     yield put( {type: RECEIVE_POSTS, posts} );
    // } catch ( e ) {
    //     //
    // }
}

export function* postsFlow( {blog, params} ) {
    const page        = get( params, 'page', 1 );
    const currentPage = get( blog, 'posts.meta.pagination.page' );

    if( page != currentPage  ) {
        yield call( fetchPosts, {page} );
    }
}

export default function* postsSaga() {
    yield takeLatest( POSTS, postsFlow );
}
