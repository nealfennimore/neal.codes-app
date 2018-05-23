export const SHOW_PROJECT_MODAL = 'SHOW_PROJECT_MODAL';
export function showProjectModal( id ) {
    return { type: SHOW_PROJECT_MODAL, id };
}

export const HIDE_PROJECT_MODAL = 'HIDE_PROJECT_MODAL';
export function hideProjectModal() {
    return { type: HIDE_PROJECT_MODAL };
}
