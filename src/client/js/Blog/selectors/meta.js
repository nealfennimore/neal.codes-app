import idx from 'idx';
import { createSelector } from 'reselect';

export const getMeta = meta => meta;
export const getPagination = createSelector( getMeta, meta => idx( meta, _ => _.pagination ) );
export const getPage = createSelector( getPagination, pagination => idx( pagination, _ => _.page ) );
export const getTotalPages = createSelector( getPagination, pagination => idx( pagination, _ => _.pages ) );
export const getTotalPosts = createSelector( getPagination, pagination => idx( pagination, _ => _.total ) );
export const getNextPage = createSelector( getPagination, pagination => idx( pagination, _ => _.next ) );
export const getPrevPage = createSelector( getPagination, pagination => idx( pagination, _ => _.prev ) );
