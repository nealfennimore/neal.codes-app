import idx from 'idx';
import { get, omit, map, flatMap, values, concat, flatten, uniqBy } from 'lodash';
import { pipe } from 'lodash/fp';
import { createSelector } from 'reselect';
import { getPosts } from 'client/js/Blog/Posts/selectors/posts';
import { getTags } from 'client/js/Blog/Tags/selectors/tags';

export const getPostsFromPages = createSelector(
    getPosts,
    posts => flatMap( posts, page => page )
);

export const getPostsFromTags = createSelector(
    getTags,
    pipe(
        tags => omit( tags, ['isFetching'] ),
        tags => map( tags, tagsByName => omit( tagsByName, ['meta'] ) ),
        tags => flatMap( tags, values )
    )
);

export const getCurrentPosts = createSelector(
    [ getPostsFromPages, getPostsFromTags ],
    pipe(
        ( posts, tags ) => concat( posts, tags ),
        posts => flatten( posts ),
        posts => uniqBy( posts, 'slug' )
    )
);

export const getPost = state => idx( state, _ => _.blog.post );
export const getSlug = props => get( props, 'match.params.slug' );
export const getPostBySlug = ( state, props ) => get( getPost( state ), getSlug( props ) );

export const isFetching = createSelector(
    getPost,
    post => idx( post, _ => _.isFetching )
);

export const shouldFetchPost = createSelector(
    [isFetching, getPostBySlug],
    ( fetching, tags ) => ! fetching && !! tags
);
