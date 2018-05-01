import provider from './provider';

export const getPost = ( slug, ...rest )=> provider().get( `post/${slug}`, ...rest ); //eslint-disable-line
