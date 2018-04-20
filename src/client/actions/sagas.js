export const RUN_SAGAS = 'RUN_SAGAS';
export function runSagas( sagas ) {
    return {
        type: RUN_SAGAS,
        sagas
    };
}

export const CANCEL_SAGAS = 'CANCEL_SAGAS';
export function cancelSagas() {
    return {
        type: CANCEL_SAGAS
    };
}
