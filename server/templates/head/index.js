import scripts from './scripts';
import styles from './styles';

export default function head({helmet}){
    return `
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />

            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${helmet.link.toString()}

            ${styles}
            ${scripts}
        </head>
    `;
}