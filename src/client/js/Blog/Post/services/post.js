import provider from 'client/js/Blog/services/provider';

export const getPost = ( slug, ...rest )=> provider().get( `post/${slug}`, ...rest ); //eslint-disable-line
