import { call, put, take, takeLatest, cancel, cancelled } from 'redux-saga/effects';
import get from 'lodash/get';
import { __SERVER__ } from 'shared/env';
import {
    FETCH_TAGS_SUCCESS,
    FETCH_TAGS_ERROR,
    FETCH_TAGS
} from 'client/js/Blog/Tags/actions/tags';
import * as service from 'client/js/Blog/Posts/services/posts';


export function* fetchTags( { page, slug } ) {
    const options = {
        params: {
            filter: `tags:[${slug}]`,
            include: 'tags',
            limit: 3,
            page:  Number( page ) || 1,
            formats: 'plaintext,html'
        }
    };

    try {
        const { data } = yield call( service.getPosts, options );
        yield put( { type: FETCH_TAGS_SUCCESS, data, slug, page } );
    } catch ( error ) {
        console.error( error );
        yield put( { type: FETCH_TAGS_ERROR, error } );
    } finally {
        if( yield cancelled() ) {
            yield put( { type: FETCH_TAGS_ERROR } );
        }
    }
}

export default function* tagSaga() {
    const task = yield takeLatest( FETCH_TAGS, fetchTags );
    if( __SERVER__ ) {
        yield take( [FETCH_TAGS_SUCCESS, FETCH_TAGS_ERROR]
        );
        yield cancel( task );
    }
}
