import first from 'lodash/first';

import {
    REQUEST_POSTS,
    RECEIVE_POSTS,
    REQUEST_POST,
    RECEIVE_POST,
    SET_ACTIVE_POST
} from 'actions/blogActions';

function blog(state={}, action) {
    switch (action.type) {
    case RECEIVE_POSTS:
        return Object.assign({}, state, action.posts, {
            isFetching: false
        });
    case RECEIVE_POST:
    case SET_ACTIVE_POST:
        return Object.assign({}, state, {
            post: first(action.posts),
            isFetching: false
        });
    case REQUEST_POSTS:
    case REQUEST_POST:
        return Object.assign({}, state, {
            isFetching: true
        });
    default:
        return state;
    }
}

export default blog;