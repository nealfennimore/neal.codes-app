const ENV   = process.env.NODE_ENV;

export const isDevelopment = ENV === 'development';
export const isProduction  = ENV === 'production';

export const isBrowser = typeof window === 'object';
export const isServer  = !isBrowser;