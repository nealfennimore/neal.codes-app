import idx from 'idx';
import { get, first, find } from 'lodash';
import { createSelector } from 'reselect';
import * as meta from 'client/js/Blog/selectors/meta';
import { getTags as getPostTags } from 'client/js/Global/selectors/post';

export const getTags = state => idx( state, _ => _.blog.tags );
export const getSlug = ( _, props ) => get( props, 'match.params.slug' );
export const getTagsBySlug = ( state, props ) => get( getTags( state ), getSlug( state, props ) );

export const isFetching = createSelector( getTags, tags => idx( tags, _ => _.isFetching ) );

export const getMeta = createSelector( getTagsBySlug, tags => idx( tags, _ => _.meta ) );
export const getPagination = createSelector( getMeta, meta.getPagination );
export const getPage = createSelector( getMeta, meta.getPage );
export const getTotalPages = createSelector( getMeta, meta.getTotalPages );
export const getTotalPosts = createSelector( getMeta, meta.getTotalPosts );
export const getNextPage = createSelector( getMeta, meta.getNextPage );
export const getPrevPage = createSelector( getMeta, meta.getPrevPage );

export const getPostsByPage = createSelector(
    [getTagsBySlug, getPage],
    ( tags, page )=> get( tags, page )
);

export const getTagSlug = tag => idx( tag, _ => _.slug );
export const getTag = createSelector(
    [getPostsByPage, getSlug],
    ( posts, slug )=> {
        const tags = getPostTags( first( posts ) );
        return find( tags, tag => getTagSlug( tag ) === slug );
    }
);

export const shouldFetchPosts = createSelector(
    [isFetching, getTagsBySlug],
    ( fetching, tags ) => ! fetching && !! tags
);
