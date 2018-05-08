import {
    FETCH_POSTS,
    FETCH_POSTS_SUCCESS
} from 'client/js/Blog/Posts/actions/posts';

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


function postsReducer( state = {}, action ) {
    switch ( action.type ) {
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
