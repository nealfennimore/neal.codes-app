import {
    FETCH_TAGS,
    FETCH_TAGS_SUCCESS
} from 'client/js/Blog/Tags/actions/tags';

function mergePosts( state, action ) {
    const { meta, posts } = action.data;
    const { slug } = action;

    return Object.assign( {}, state, {
        [ slug ]: {
            [meta.pagination.page]: posts,
            meta
        },
        isFetching:false
    } );
}


function tags( state = {}, action ) {
    switch ( action.type ) {
    case FETCH_TAGS_SUCCESS:
        return mergePosts( state, action );
    case FETCH_TAGS:
        return Object.assign( {}, state, {
            isFetching: true
        } );

    default:
        return state;
    }
}

export default tags;
