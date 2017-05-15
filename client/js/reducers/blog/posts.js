import {
    REQUEST_POSTS,
    RECEIVE_POSTS
} from 'sagas/blog/posts';

function posts(state={}, action) {
    switch (action.type) {
    case RECEIVE_POSTS:
        return Object.assign({}, state, {
            ...action.posts,
            isFetching: false
        });
    case REQUEST_POSTS:
        return Object.assign({}, state, {
            isFetching: true
        });
    default:
        return state;
    }
}

export default posts;