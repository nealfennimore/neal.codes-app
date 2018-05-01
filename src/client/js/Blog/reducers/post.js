import first from 'lodash/first';

import {
    REQUEST_POST,
    RECEIVE_POST,
    SET_POST
} from 'client/js/Blog/actions/post';

function posts( state = {}, action ) {
    switch ( action.type ) {
    case RECEIVE_POST:
    case SET_POST:
        return Object.assign( {}, state, {
            ...first( action.posts ),
            isFetching: false
        } );

    case REQUEST_POST:
        return Object.assign( {}, state, {
            isFetching: true
        } );
    default:
        return state;
    }
}

export default posts;
