import clientConfig from '../../../webpack/common/webpack.common.client.config.js';
import { isDevelopment } from 'shared/env';

let styleSheets = '';

function template(fileName){
    return `<link rel="stylesheet" href="/${fileName}.css" />`;
}

// Stylesheets are injected by the style-loader in development
if(!isDevelopment){
    const files = Object.keys(clientConfig.entry).reverse();
    styleSheets = files.map(template).join('\n');
}

export default styleSheets;