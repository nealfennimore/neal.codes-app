import {
    REQUEST_POSTS,
    RECEIVE_POSTS
} from 'actions/blogActions';

function blog(state={}, action) {
    switch (action.type) {
    case RECEIVE_POSTS:
        return Object.assign({}, state, action.posts);
    case REQUEST_POSTS:
    default:
        return state;
    }
}

export default blog;