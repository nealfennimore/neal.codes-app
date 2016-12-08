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

export const CHANGE_PAGE = 'CHANGE_PAGE';
export function changePage(){
    return { type: CHANGE_PAGE };
}

export function fetchPage(page){
    return (dispatch) => {
        const params = setPageParams(page);
        dispatch(changePage());
        return dispatch(fetchPosts(params));
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