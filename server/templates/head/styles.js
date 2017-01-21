import clientConfig from '../../../webpack/common/webpack.common.client.config.js';
import { isDevelopment } from 'shared/env';

let tags = '',
    styleSheets = '',
    preloadStyleSheets = '';

function preloadTemplate(fileName){
    return `<link rel="preload" href="/${fileName}.css" as="style" onload="this.rel='stylesheet'" />`;
}

function template(fileName){
    return `<link rel="stylesheet" href="/${fileName}.css" />`;
}

// Stylesheets are injected by the style-loader in development
if(!isDevelopment){
    const files = Object.keys(clientConfig.entry).reverse();
    styleSheets = files.map(template).join('\n');
    preloadStyleSheets = files.map(preloadTemplate).join('\n');

    tags = `
        ${preloadStyleSheets}
        <noscript>
            ${styleSheets}
        </noscript>
    `;
}

export default tags;