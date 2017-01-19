import get from 'lodash/get';

export default function postsMeta({initialState}) {
    const page = get(initialState, 'blog.posts.meta.pagination.page', 1);
    const baseUrl = 'https://neal.codes/blog/';
    const baseDescription = 'Front end web development blog';

    const title = 'neal.codes';
    const description = page == 1 ? baseDescription : `${baseDescription} | Page ${page}` ;
    const url = baseUrl;

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
   `;
}
