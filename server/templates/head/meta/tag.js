import get from 'lodash/get';
import { capitializeWords } from 'shared/formatting';

export default function postMeta({initialState, router}) {
    const slug = get(router, 'params.slug', '');
    const tag  = get(initialState, `blog.tags.${slug}`, {});
    const page = get(tag, 'meta.pagination.page', 1);
    const tagName = capitializeWords(slug.replace('-', ' '));

    const baseUrl = 'https://neal.codes/blog';
    const title = `${tagName} - Page ${page} - neal.codes`;
    const url   = `${baseUrl}/tag/${slug}`;

    return `
        <meta name="description" content="${title}">
        <link rel="canonical" href="${url}">
        <meta name="referrer" content="origin">

        <meta property="og:site_name" content="neal.codes">
        <meta property="og:type" content="website">
        <meta property="og:title" content="${title}">
        <meta property="og:url" content="${url}">

        <meta name="twitter:card" content="summary">
        <meta name="twitter:title" content="${title}">
        <meta name="twitter:url" content="${url}">
    `;
}



