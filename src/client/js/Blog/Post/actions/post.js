export const FETCH_POST = 'FETCH_POST';

/**
 *
 * @param {{slug: string}} params
 */
export function fetchPost( params ) {
    return {
        type: FETCH_POST,
        params
    };
}

export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_ERROR = 'FETCH_POST_ERROR';

export const LOOKUP_POST = 'LOOKUP_POST';
