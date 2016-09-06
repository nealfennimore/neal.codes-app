const path = require('path');

module.exports = {
    server: {
        port: 4545,
        ip: '0.0.0.0', // Set to 0.0.0.0 for all
        hostname: 'docker.local',
        protocol: 'https'
    },
    paths: {
        CLIENT: path.resolve(__dirname, 'client'),
        PUBLIC: path.resolve(__dirname, 'public'),
        DEV: path.resolve(__dirname, 'dev')
    },
    regex: {
        VENDOR_FILES: /vendor(Styles)?\.(scss|css|js)$/,
        VENDOR_SCSS: /vendorStyles\.scss$/
    }
};