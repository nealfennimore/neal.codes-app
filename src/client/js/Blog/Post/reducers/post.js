import { reduce } from 'lodash';
import * as actions from 'client/js/Blog/Post/actions/post';
import { getSlug } from 'client/js/Blog/selectors/post';
import { FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR } from 'client/js/Blog/Posts/actions/posts';

function keyBySlug( state, action ) {
    return Object.assign( {}, state, reduce(
        action.data.posts,
        ( result, post )=>{
            const slug = getSlug( post );

            if( slug ) {
                result[ slug ] = post;
            }

            return result;
        },
        {} )
    );
}

function posts( state = {}, action ) {
    switch ( action.type ) {

    case actions.FETCH_POST_SUCCESS:
    case actions.LOOKUP_POST:
        return {
            ...state,
            ...keyBySlug( state, action ),
            isFetching: false
        };

    case FETCH_POSTS_SUCCESS:
        return keyBySlug( state, action );

    case actions.FETCH_POST:
        return {
            ...state,
            isFetching: true
        };

    case actions.FETCH_POST_ERROR:
    case FETCH_POSTS_ERROR:
        return {
            ...state,
            isFetching: false
        };
    default:
        return state;
    }
}

export default posts;
