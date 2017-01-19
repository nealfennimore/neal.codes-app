import post from './meta/post';
import posts from './meta/posts';
import tag from './meta/tag';
import projects from './meta/projects';
import home from './meta/home';

export default function meta(args){
    switch (args.page) {
    case 'posts':
        return posts(args);
    case 'post':
        return post(args);
    case 'tag':
        return tag(args);
    case 'projects':
        return projects(args);

    case 'home':
    default:
        return home(args);
    }
}