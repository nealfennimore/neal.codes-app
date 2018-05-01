import { call, put, takeLatest } from 'redux-saga/effects';
// import blogService from 'services/blog';
// import { setPageParams } from 'shared/blog';
import get from 'lodash/get';
import {
    REQUEST_POSTS,
    RECEIVE_POSTS,
    POSTS
} from 'client/js/Blog/Posts/actions/posts';
import * as service from 'client/js/Blog/Posts/services/posts';


export function* fetchPosts( {page} ) {
    yield put( { type: REQUEST_POSTS } );
    const options = {
        params: {
            limit: 3,
            include: 'tags',
            page
        }
    };

    try {
        const { data } = yield call( service.getPosts, options );
        yield put( {type: RECEIVE_POSTS, posts: data.posts} );
    } catch ( e ) {
        //
    }
}

export function* postsFlow( {blog, params} ) {
    const page        = get( params, 'page', 1 );
    const currentPage = get( blog, 'posts.meta.pagination.page' );

    if( page != currentPage  ) {
        yield call( fetchPosts, { page } );
    }
}

export default function* postsSaga() {
    yield takeLatest( POSTS, postsFlow );
}
