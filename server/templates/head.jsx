import clientConfig from '../../webpack/common/webpack.common.client.config.js';

function template(fileName){
    return `<link rel="stylesheet" href="/${fileName}.css" media="screen" title="${fileName} styles" charset="utf-8">`;
}

const files       = Object.keys(clientConfig.entry).reverse();
const styleSheets = files.map(template).join('\n');

export default styleSheets;