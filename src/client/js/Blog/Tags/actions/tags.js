export const FETCH_TAGS = 'FETCH_TAGS';
/**
 *
 * @param {{page: number, slug: string}} params
 */
export function fetchPostsByTag( { page, slug } ) {
    return {
        type: FETCH_TAGS,
        page,
        slug
    };
}
export const FETCH_TAGS_SUCCESS = 'FETCH_TAGS_SUCCESS';
export const FETCH_TAGS_ERROR = 'FETCH_TAGS_ERROR';

export const SYNC_PAGE = 'TAGS_SYNC_PAGE';
export function syncPage( slug, page ) {
    return {
        type: SYNC_PAGE,
        slug,
        page: Number( page )
    };
}
