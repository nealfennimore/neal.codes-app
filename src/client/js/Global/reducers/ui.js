import * as actions from 'client/js/Global/actions/ui';

const initialState = {
    inverse: false
};

export default function ui( state = initialState, action ) {
    switch ( action.type ) {
    case actions.SHOW_INVERSE:
        return Object.assign( {}, state, { inverse: true } );
    case actions.HIDE_INVERSE:
        return Object.assign( {}, state, { inverse: false } );
    default:
        return state;
    }
}
