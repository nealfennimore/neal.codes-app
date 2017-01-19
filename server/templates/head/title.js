import get from 'lodash/get';
import { capitializeWords } from 'shared/formatting';

const baseTitle = 'Neal Fennimore | Front End Developer';

function title({page, router, initialState}){
    switch (page) {
    case 'post':
        return `${get(initialState, 'blog.post.title', '')} | ${baseTitle}`;
    case 'tag':
        return `${capitializeWords(get(router, 'params.slug', '').replace('-', ' '))} | ${baseTitle}`;
    case 'posts':
        return `Blog | ${baseTitle}`;
    case 'projects':
        return `Projects | ${baseTitle}`;
    default:
        return baseTitle;
    }
}

export default function titleTag(args){
    return `<title>${title(args)}</title>`;
}