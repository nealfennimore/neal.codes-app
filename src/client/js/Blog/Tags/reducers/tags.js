import {
    FETCH_TAGS,
    FETCH_TAGS_SUCCESS,
    FETCH_TAGS_ERROR,
    SYNC_PAGE
} from 'client/js/Blog/Tags/actions/tags';
import { merge } from 'lodash';

function mergePosts( state, action ) {
    const { meta, posts } = action.data;
    const { slug } = action;

    return merge( {}, state, {
        [ slug ]: {
            [meta.pagination.page]: posts,
            meta
        },
        isFetching:false
    } );
}

function syncPage( state, action ) {
    const meta = state[action.slug] &&  state[action.slug].meta;

    if( ! meta ) {
        return state;
    }

    return merge( {}, state, {
        [action.slug]: {
            meta: {
                pagination: {
                    prev: action.page - 1 > 0 ? action.page - 1 : null,
                    page: action.page,
                    next: action.page + 1 <= meta.pagination.pages ? action.page + 1 : null
                }
            }
        }
    } );
}

function tags( state = {}, action ) {
    switch ( action.type ) {
    case SYNC_PAGE:
        return syncPage( state, action );
    case FETCH_TAGS_SUCCESS:
        return mergePosts( state, action );
    case FETCH_TAGS:
        return {
            ...state,
            isFetching: true
        };
    case FETCH_TAGS_ERROR:
        return {
            ...state,
            isFetching: false
        };

    default:
        return state;
    }
}

export default tags;
