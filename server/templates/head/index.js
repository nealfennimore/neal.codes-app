import title from './title';
import meta from './meta';
import scripts from './scripts';
import styles from './styles';

import { getPage } from '../../utils/page';

export default function head(args){
    const page = getPage(args);
    let _args = Object.assign({page}, args);

    return `
        <head>
            ${title(_args)}
            ${meta(_args)}
            ${scripts}
            ${styles}
        </head>
    `;
}