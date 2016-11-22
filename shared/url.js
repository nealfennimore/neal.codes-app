import { isBrowser } from 'shared/env';

function constructParam(name, queryParams){
    return `${name}=${encodeURIComponent(queryParams[name])}`;
}

export function constructParams(paramNames, queryParams){
    return paramNames.map((name)=>constructParam(name, queryParams)).join('&');
}

export function constructURL(path, queryParams){
    let paramNames = Object.keys(queryParams),
        params     = '';

    if(paramNames.length){
        params = `?${constructParams(paramNames, queryParams)}`;
    }

    return `${path}${params}`;
}