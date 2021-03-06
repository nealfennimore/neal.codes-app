import {
    FETCH_POSTS,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_ERROR,
    SYNC_PAGE
} from 'client/js/Blog/Posts/actions/posts';
import { getTotalPages } from 'client/js/Blog/selectors/meta';
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
                next: action.page + 1 <= getTotalPages( state.meta ) ? action.page + 1 : null
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
        return {
            ...state,
            isFetching: true
        };
    case FETCH_POSTS_ERROR:
        return {
            ...state,
            isFetching: false
        };
    default:
        return state;
    }
}

export default postsReducer;
