import { call, put, select, take, takeLatest, cancel, cancelled } from 'redux-saga/effects';
import { find } from 'lodash';
import { __SERVER__ } from 'shared/env';
import * as actions from 'client/js/Blog/Post/actions/post';
import * as service from 'client/js/Blog/Post/services/post';
import { getCurrentPosts } from 'client/js/Blog/Post/selectors/post';


export function* fetchPost( action ) {
    try {
        const { data } = yield call( service.getPost, action.slug, {
            params: { include: 'tags' }
        } );
        yield put( { type: actions.FETCH_POST_SUCCESS, data } );
    } catch ( error ) {
        console.error( error );
        yield put( { type: actions.FETCH_POST_ERROR, error } );
    } finally {
        if( yield cancelled() ) {
            yield put( { type: actions.FETCH_POST_ERROR } );
        }
    }
}

export function* postFlow( { params: { slug } } ) {
    const posts = yield select( getCurrentPosts );
    const post = find( posts, p => p.slug === slug );

    if( post ) {
        yield put( {
            type: actions.LOOKUP_POST,
            data: {
                posts: [ post ]
            }
        } );
    } else {
        yield call( fetchPost, { slug } );
    }
}

export default function* postSaga() {
    const task = yield takeLatest( actions.FETCH_POST, postFlow );
    if( __SERVER__ ) {
        yield take( [actions.FETCH_POST_SUCCESS, actions.FETCH_POST_ERROR]
        );
        yield cancel( task );
    }
}
