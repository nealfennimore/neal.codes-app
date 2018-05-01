import {
    REQUEST_TAGS,
    RECEIVE_TAGS
} from 'client/js/Blog/actions/tags';

function tags( state = {}, action ) {
    switch ( action.type ) {
    case RECEIVE_TAGS:
        return Object.assign( {}, state, {
            [action.slug]: action.tags,
            isFetching: false
        } );
    case REQUEST_TAGS:
        return Object.assign( {}, state, {
            isFetching: true
        } );

    default:
        return state;
    }
}

export default tags;
