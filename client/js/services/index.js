import request from 'superagent';

export const GET = (url) => request.get(url).then(res => res.body);
// export const POST = (url, args={}) => request.post(url);