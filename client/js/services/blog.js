import { fetcher } from 'shared/api';

const posts = (args={})=>fetcher({
    rootPath: 'posts',
    ...args
});

export default {
    posts
};