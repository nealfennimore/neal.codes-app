export const FETCH_POSTS = 'FETCH_POSTS';

/**
 *
 * @param {{page: number}} params
 */
export function fetchPosts( params ) {
    return {
        type: FETCH_POSTS,
        params
    };
}

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';
