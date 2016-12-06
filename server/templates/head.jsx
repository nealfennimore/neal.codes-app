import clientConfig from '../../webpack/common/webpack.common.client.config.js';
import { isDevelopment } from 'shared/env';

let styleSheets = '';

function template(fileName){
    return `<link rel="stylesheet" href="/${fileName}.css" media="screen" title="${fileName} styles" charset="utf-8">`;
}

// Stylesheets are injected by the style-loader in development
if(!isDevelopment){
    const files = Object.keys(clientConfig.entry).reverse();
    styleSheets = files.map(template).join('\n');
}

styleSheets += `
    <script src="https://use.typekit.net/ppk4ako.js"></script>
    <script>try{Typekit.load({ async: true });}catch(e){}</script>
`;

export default styleSheets;