import idx from 'idx';
import { get } from 'lodash';
import { createSelector } from 'reselect';

export const selector = state => idx( state, _ => _.blog.posts );

export const isFetching = createSelector( selector, posts => idx( posts, _ => _.isFetching ) );

export const getPosts = createSelector( selector, posts => idx( posts, _ => _.posts ) );

export const getMeta = createSelector( selector, posts => idx( posts, _ => _.meta ) );
export const getPagination = createSelector( getMeta, meta => idx( meta, _ => _.pagination ) );
export const getPage = createSelector( getPagination, pagination => idx( pagination, _ => _.page ) );
export const getTotalPages = createSelector( getPagination, pagination => idx( pagination, _ => _.pages ) );
export const getTotalPosts = createSelector( getPagination, pagination => idx( pagination, _ => _.total ) );
export const getNextPage = createSelector( getPagination, pagination => idx( pagination, _ => _.next ) );
export const getPrevPage = createSelector( getPagination, pagination => idx( pagination, _ => _.prev ) );

export const getPostsByPage = createSelector(
    [getPosts, getPage],
    ( posts, page )=> get( posts, page )
);

export const shouldFetchPosts = createSelector(
    [isFetching, getPostsByPage],
    ( fetching, posts ) => ! fetching && !! posts
);
