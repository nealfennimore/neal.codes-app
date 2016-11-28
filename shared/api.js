import { GET } from 'services';
import { constructURL } from 'shared/url';
import { isBrowser } from 'shared/env';

export function getAPIRootPath(){
    // The hostname is dockerhost on the server as the API request needs
    // to go dinto the nginx container directly, since there is no DNS to find
    // the server's actual hostname
    const host = isBrowser ? '' : 'https://dockerhost';
    return `${host}/api`;
}

export function fetcher({
    path='',
    id='',
    params={}
}){
    if(id){ id = `/${id}`; }
    const endpoint = `${getAPIRootPath()}/${path}${id}`;
    return GET(constructURL(endpoint, params));
};