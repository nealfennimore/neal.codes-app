import blogService from 'services/blog';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export function requestPosts(){
    return { type: REQUEST_POSTS };
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export function receivePosts(posts){
    return { type: RECEIVE_POSTS, posts };
}

export function fetchPosts(){
    return (dispatch) => {
        dispatch(requestPosts());
        return blogService.posts()
            .then((res)=>
                dispatch(receivePosts(res))
            );
    };
}