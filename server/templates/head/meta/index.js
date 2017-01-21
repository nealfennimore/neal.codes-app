import post from './post';
import posts from './posts';
import tag from './tag';
import projects from './projects';
import home from './home';

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