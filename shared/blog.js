import { browserHistory } from 'react-router'
import merge from 'lodash/merge';

const POSTS_PER_PAGE = 4;

export const queryParams = {
    params: {
        limit: POSTS_PER_PAGE,
        include: 'tags'
    }
};

export const setPageParams = (page)=>merge({}, queryParams, {params: {page}});
export const setPostsPage  = (page)=> {
    const url = page === 1 ? '/blog' : `/blog/page/${page}`;
    browserHistory.push(url);
};