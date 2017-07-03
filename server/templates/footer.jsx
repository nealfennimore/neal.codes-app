import clientConfig from '../../webpack/common/webpack.common.client.config.babel';
import buildStamp from '../../buildStamp';

function template(fileName){
    return `<script src="/${fileName}.js?v=${buildStamp}" defer></script>`;
}

const files   = Object.keys(clientConfig.entry).reverse();
const scripts = files.map(template).join('\n');

export default scripts;
