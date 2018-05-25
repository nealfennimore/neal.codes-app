import idx from 'idx';
import { get } from 'lodash';
import { createSelector } from 'reselect';
import * as meta from 'client/js/Blog/selectors/meta';
import { getParamsPage } from 'client/js/Global/selectors/params';

export const selector = state => idx( state, _ => _.blog.posts );

export const isFetching = createSelector( selector, posts => idx( posts, _ => _.isFetching ) );

export const getPosts = createSelector( selector, posts => idx( posts, _ => _.posts ) );

export const getMeta = createSelector( selector, posts => idx( posts, _ => _.meta ) );
export const getPagination = createSelector( getMeta, meta.getPagination );
export const getPage = createSelector( getMeta, meta.getPage );
export const getTotalPages = createSelector( getMeta, meta.getTotalPages );
export const getTotalPosts = createSelector( getMeta, meta.getTotalPosts );
export const getNextPage = createSelector( getMeta, meta.getNextPage );
export const getPrevPage = createSelector( getMeta, meta.getPrevPage );

export const getPostsByPage = createSelector(
    [getPosts, getParamsPage],
    ( posts, page )=> get( posts, page )
);

export const shouldFetchPosts = createSelector(
    [isFetching, getPostsByPage],
    ( fetching, posts ) => ! fetching && ! posts
);
