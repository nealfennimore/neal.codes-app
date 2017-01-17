import meta from './meta';
import scripts from './scripts';
import styles from './styles';

export default function head(args){
    return `
        <head>
            <meta charset="utf-8">
            ${meta(args)}
            ${scripts}
            ${styles}
        </head>
    `;
}