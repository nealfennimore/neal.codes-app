import {
    FETCH_POSTS,
    FETCH_POSTS_SUCCESS,
    SYNC_PAGE
} from 'client/js/Blog/Posts/actions/posts';
import { merge } from 'lodash';

function mergePosts( state, action ) {
    const { meta, posts } = action.data;

    return Object.assign( {}, state, {
        meta,
        posts: {
            ...state.posts,
            [ meta.pagination.page ]: posts,
        },
        isFetching:false
    } );
}

function syncPage( state, action ) {
    return merge( {}, state, {
        meta: {
            pagination: {
                prev: action.page - 1 > 0 ? action.page - 1 : null,
                page: action.page,
                next: action.page + 1 <= state.meta.pagination.pages ? action.page + 1 : null
            }
        }
    } );
}

function postsReducer( state = {}, action ) {
    switch ( action.type ) {
    case SYNC_PAGE:
        return syncPage( state, action );
    case FETCH_POSTS_SUCCESS:
        return mergePosts( state, action );
    case FETCH_POSTS:
        return Object.assign( {}, state, {
            isFetching: true
        } );
    default:
        return state;
    }
}

export default postsReducer;
