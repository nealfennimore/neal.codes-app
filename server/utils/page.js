import get from 'lodash/get';

const fs   = '\\/';
const optionalFs = `${fs}?`;
const slug = '(\\w|-)+';
const withOptionalPages = `(${fs}page${fs}\\d+)?`;

const blog = `${fs}blog`;
const post = `${blog}${fs}${slug}`;
const tag = `${blog}${fs}tag${fs}${slug}`;
const projects = `${fs}projects`;

function getRegEx(str){
    return new RegExp(str, 'i');
}

const postsPage    = getRegEx(`${blog}${withOptionalPages}${optionalFs}$`);
const postPage     = getRegEx(`${post}${optionalFs}`);
const tagPage      = getRegEx(`${tag}${withOptionalPages}${optionalFs}$`);
const projectsPage = getRegEx(`${projects}${optionalFs}`);

export function getPage({router}) {
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