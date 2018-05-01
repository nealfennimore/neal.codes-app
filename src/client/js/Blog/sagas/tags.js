import { call, put, takeLatest } from 'redux-saga/effects';
import get from 'lodash/get';
import {
    GET_TAGS,
    REQUEST_TAGS,
    RECEIVE_TAGS
} from 'client/js/Blog/actions/tags';
import * as service from 'client/js/Blog/services/posts';

export function* fetchTags( {slug, page} ) {
    yield put( {type: REQUEST_TAGS } );
    const options = {
        params: {
            filter: `tags:[${slug}]`,
            include: 'tags',
            limit: 3,
            page:  Number( page ) || 1,
        }
    };

    try {
        const { data } = yield call( service.getPosts, options );
        yield put( {type: RECEIVE_TAGS, tags: data.tags, slug} );
    } catch ( e ) {
        //
    }
}

export function* tagsFlow( {blog, params: { slug, tagPage = 1 }} ) {
    const posts = get( blog, `tags.${slug}`, false );
    const page  = get( posts, 'meta.pagination.page' );

    if( ! ( posts && page == tagPage ) ) {
        yield call( fetchTags, {slug, page: tagPage} );
    }
}

export default function* tagsWatcher() {
    yield takeLatest( GET_TAGS, tagsFlow );
}
