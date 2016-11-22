import get from 'lodash/get';

const ENV = get(process, 'env.NODE_ENV', false);

export const isDevelopment = ENV === 'development';
export const isProduction  = ENV === 'production';

export const isBrowser     = typeof window === 'object';