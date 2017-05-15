import { fetcher } from 'shared/api';

const posts = (args={})=>fetcher({
    path: 'posts',
    ...args
});

const postBySlug = ({slug='', ...rest})=>fetcher({
    path: 'posts/slug',
    id: slug,
    ...rest
});

export default {
    posts,
    tags: posts,
    postBySlug
};