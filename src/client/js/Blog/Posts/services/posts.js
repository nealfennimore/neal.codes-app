import provider from 'client/js/Blog/services/provider';

export const getPosts = ( ...args )=> provider().get( `posts`, ...args ); //eslint-disable-line
