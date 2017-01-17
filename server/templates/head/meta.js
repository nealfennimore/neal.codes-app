import get from 'lodash/get';

    //
    // <title>Adding Google Custom Search Engine to your site</title>
    // <meta name="description" content="">
    //
    // <meta name="HandheldFriendly" content="True">
    // <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //
    //
    // <link rel="canonical" href="https://neal.codes/blog/adding-google-custom-search-engine-to-your-site/">
    // <meta name="referrer" content="origin">
    //
    // <meta property="og:site_name" content="neal.codes">
    // <meta property="og:type" content="article">
    // <meta property="og:title" content="Adding Google Custom Search Engine to your site">
    // <meta property="og:description" content="I've added Google CSE recently as Ghost does not come with one initially. I added a custom integration as I did not like the branding that comes with it by default. The custom integration comes with a 100 free searches...">
    // <meta property="og:url" content="https://neal.codes/blog/adding-google-custom-search-engine-to-your-site/">
    // <meta property="article:published_time" content="2015-12-24T18:02:28.632Z">
    // <meta property="article:modified_time" content="2015-12-24T18:08:59.255Z">
    // <meta property="article:tag" content="API">
    // <meta property="article:tag" content="google">
    // <meta property="article:tag" content="search">
    //
    // <meta name="twitter:card" content="summary">
    // <meta name="twitter:title" content="Adding Google Custom Search Engine to your site">
    // <meta name="twitter:description" content="I've added Google CSE recently as Ghost does not come with one initially. I added a custom integration as I did not like the branding that comes with it by default. The custom integration comes with a 100 free searches...">
    // <meta name="twitter:url" content="https://neal.codes/blog/adding-google-custom-search-engine-to-your-site/">
const fs   = '\\/';
const slug = '(\\w|-)+';
const withOptionalPages = `(${fs}page${fs}\\d+)?`;

const blog = `${fs}blog`;
const post = `${blog}${fs}${slug}`;
const tag = `${blog}${fs}tag${fs}${slug}`;
const projects = `${fs}projects`;

function getRegEx(str){
    return new RegExp(str, 'i');
}

const postsPage    = getRegEx(`${blog}${withOptionalPages}$`);
const postPage     = getRegEx(post);
const tagPage      = getRegEx(`${tag}${withOptionalPages}$`);
const projectsPage = getRegEx(projects);

function getPage({router}) {
    const pathname = get(router, 'location.pathname');

    if( postsPage.test(pathname) ){
        return'posts';
    } else if ( tagPage.test(pathname) ){
        return 'tag';
    } else if( postPage.test(pathname) ){
        return'post';
    } else if ( projectsPage.test(pathname) ) {
        return 'projects';
    } else {
        return 'home';
    }
}

export default function meta(args){
    const page = getPage(args);

    console.log('*****************', page);


    return '<title>Hello</title>';
}