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

export const SYNC_PAGE = 'POST_SYNC_PAGE';
export function syncPage( page ) {
    return {
        type: SYNC_PAGE,
        page: Number( page )
    };
}
