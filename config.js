const path = require('path');

const config = {
    server: {
        port: 4545,
        devPort: 4546,
        ip: '0.0.0.0',
        hostname: 'docker.local',
        protocol: 'https'
    },
    paths: {
        CLIENT: path.resolve(__dirname, 'client'),
        SERVER: path.resolve(__dirname, 'server'),
        PUBLIC: path.resolve(__dirname, 'public'),
        DEV: path.resolve(__dirname, 'dev')
    },
    regex: {
        VENDOR_FILES: /vendor(Styles)?\.(scss|css|js)$/,
        VENDOR_SCSS: /vendorStyles\.scss$/
    },
    webpack: {
        cssModuleName: '[path][name]-[local]'
    }
};

export default config;