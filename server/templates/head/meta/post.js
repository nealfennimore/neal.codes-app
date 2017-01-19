import get from 'lodash/get';
import { cleanMarkdown, truncate } from 'shared/formatting';

function getTags(tags){
    return tags
        .map( tag => `<meta property="article:tag" content="${tag.name}">`)
        .join('\n');
}

export default function postMeta({initialState}) {
    const post = get(initialState, 'blog.post', {});

    const baseDescription = post.meta_description || post.markdown;
    const baseTitle       = post.meta_title || post.title;
    const baseUrl         = 'https://neal.codes/blog/';

    const title = baseTitle;
    const description = truncate(cleanMarkdown(baseDescription || ''), 160);
    const url   = `${baseUrl}${get(post, 'url', '')}`;
    const created = get(post, 'created_at', '');
    const updated = get(post, 'updated_at', '');

    const tags = get(post, 'tags', []);

    return `
        <meta name="description" content="${title}">
        <link rel="canonical" href="${url}">
        <meta name="referrer" content="origin">

        <meta property="og:type" content="article">
        <meta property="og:title" content="${title}">
        <meta property="og:description" content="${description}">
        <meta property="og:url" content="${url}">

        <meta name="twitter:card" content="summary">
        <meta name="twitter:title" content="${title}">
        <meta name="twitter:description" content="${description}">
        <meta name="twitter:url" content="${url}">

        <meta property="article:published_time" content="${created}">
        <meta property="article:modified_time" content="${updated}">
        ${getTags(tags)}
    `;
}



