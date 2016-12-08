import first from 'lodash/first';

import {
    REQUEST_POSTS,
    RECEIVE_POSTS,
    CHANGE_PAGE
} from 'actions/blog/posts';

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
    case CHANGE_PAGE:
    default:
        return state;
    }
}

export default posts;