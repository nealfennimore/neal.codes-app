import { SHOW_PROJECT_MODAL, HIDE_PROJECT_MODAL } from 'sagas/projects';

const initialState = {
    isActive: false,
    activeID: null
};

function modal(state=initialState, action) {
    switch (action.type) {
    case SHOW_PROJECT_MODAL:
        return Object.assign({}, state, {
            activeID: action.id,
            isActive: true
        });

    case HIDE_PROJECT_MODAL:
        return Object.assign({}, state, {
            activeID: null,
            isActive: false
        });

    default:
        return state;
    }
}

export default modal;