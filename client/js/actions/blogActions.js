import find from 'lodash/find';
import get from 'lodash/get';
import blogService from 'services/blog';

///////////
// Posts //
///////////

export const REQUEST_POSTS = 'REQUEST_POSTS';
export function requestPosts(){
    return { type: REQUEST_POSTS };
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export function receivePosts(posts){
    return { type: RECEIVE_POSTS, posts };
}

/**
 * Fetch posts based on query params sent
 *
 * @param  {Object} [args={}] Object containing queryParams
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

//////////
// Post //
//////////

export const REQUEST_POST = 'REQUEST_POST';
export function requestPost(){
    return { type: REQUEST_POST };
}

export const RECEIVE_POST = 'RECEIVE_POST';
export function receivePost(posts){
    return { type: RECEIVE_POST, posts };
}

export const SET_ACTIVE_POST = 'SET_ACTIVE_POST';
export function setActivePost(posts){
    return { type: SET_ACTIVE_POST, posts };
}

/**
 * Fetch post for the current page
 *
 * @param  {Object} [args={}] Object containing a slug
 *
 * @return {Function}
 */
export function fetchPost(args={}){
    return (dispatch) => {
        dispatch(requestPost());
        return blogService.postBySlug(args)
            .then((res)=>
                dispatch(receivePost(res.posts))
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
export function fetchPostIfNeeded({blog, params: {slug}}){
    const isActivePost = get(blog, 'post.slug', false) === slug;
    const posts = get(blog, 'posts', []);
    const post = !isActivePost ? find(posts, p => p.slug === slug) : false;

    return (dispatch) => {
        if(isActivePost){
            return; // Do nothing
        } else if(post){
            return dispatch(setActivePost([post]));
        } else {
            return dispatch(fetchPost({slug}));
        }
    };
}