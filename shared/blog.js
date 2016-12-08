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