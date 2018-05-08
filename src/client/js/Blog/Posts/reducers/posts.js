import {
    FETCH_POSTS,
    FETCH_POSTS_SUCCESS
} from 'client/js/Blog/Posts/actions/posts';

function posts( state = {}, action ) {
    switch ( action.type ) {
    case FETCH_POSTS_SUCCESS:
        return Object.assign( {}, state, {
            ...action.posts,
            isFetching: false
        } );
    case FETCH_POSTS:
        return Object.assign( {}, state, {
            isFetching: true
        } );
    default:
        return state;
    }
}

export default posts;
