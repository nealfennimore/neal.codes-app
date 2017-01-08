import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';

import blogService from 'services/blog';
import { setPageParams } from 'shared/blog';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export function requestPosts(){
    return { type: REQUEST_POSTS };
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export function receivePosts(posts){
    return { type: RECEIVE_POSTS, posts };
}

export function fetchPage(page){
    return (dispatch) => {
        const params = setPageParams(page);
        return dispatch(fetchPosts(params));
    };
}

export function fetchPageIfNeeded({blog, params: {page=1}}){
    const posts = get(blog, 'posts', false);
    const currentPage = get(posts, 'meta.pagination.page', 1);

    return (dispatch) => {
        if(!isEmpty(posts) && currentPage == page){
            return;
        } else {
            return dispatch(fetchPage(page));
        }
    };
}

/**
 * Fetch posts based on query params sent
 *
 * @param  {Object} [args={}] Object containing params
 *
 * @return {function}
 */
export function fetchPosts(args={}){
    return (dispatch) => {
        dispatch(requestPosts());
        return blogService.posts(args)
            .then((res)=>
                dispatch(receivePosts(res))
            );
    };
}