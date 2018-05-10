export const FETCH_TAGS = 'FETCH_TAGS';
/**
 *
 * @param {{page: number, slug: string}} params
 */
export function fetchTags( { page, slug } ) {
    return {
        type: FETCH_TAGS,
        page,
        slug
    };
}
export const FETCH_TAGS_SUCCESS = 'FETCH_TAGS_SUCCESS';
export const FETCH_TAGS_ERROR = 'FETCH_TAGS_ERROR';
