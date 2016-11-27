import request from 'superagent';
import has from 'lodash/has';

function process({body}){
    // has(body, 'errors')
    return body;
}

export const GET = (url) => request.get(url).then(process);
// export const POST = (url, args={}) => request.post(url);