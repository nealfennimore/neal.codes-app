import blogService from 'services/blog';
import { queryParams } from 'shared/blog';
import get from 'lodash/get';
import merge from 'lodash/merge';

export const REQUEST_TAGS = 'REQUEST_TAGS';
export function requestTags(){
    return { type: REQUEST_TAGS };
}

export const RECEIVE_TAGS = 'RECEIVE_TAGS';
export function receiveTags(tags, slug){
    return { type: RECEIVE_TAGS, tags, slug };
}

/**
 * Fetch tags based on query params sent
 *
 * @param  {Object} [args={}] Object containing params
 *
 * @return {function}
 */
export function fetchTags(slug, tagPage){
    const args = merge({}, queryParams, {
        params: {
            filter: `tags:[${slug}]`,
            page:   Number(tagPage) || 1
        }
    });

    return (dispatch) => {
        dispatch(requestTags());
        return blogService.posts(args)
            .then((res)=>
                dispatch(receiveTags(res, slug))
            );
    };
}

/**
 * Fetch posts if it's not already in the redux store
 * either when it's the same 'post' or located within 'posts'.
 * We grab the correct post based on the slug
 *
 * @param  {Object} blog   [Redux blog store]
 * @param  {Object} params [React router params]
 *
 * @return {Function}
 */
export function fetchTagsIfNeeded({blog, params: {slug, tagPage}}){
    const posts = get(blog, `tags.${slug}`, false);

    return (dispatch) => {
        if(posts){
            return;
        } else {
            return dispatch(fetchTags(slug, tagPage));
        }
    };
}