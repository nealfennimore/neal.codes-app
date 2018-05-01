import provider from './provider';

export const getPosts = ( ...args )=> provider().get( `posts`, ...args ); //eslint-disable-line
