export default function projectsMeta({initialState, router}) {
    const baseUrl         = 'https://neal.codes/blog';

    const title = 'Projects - neal.codes';
    const url   = `${baseUrl}/projects`;

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