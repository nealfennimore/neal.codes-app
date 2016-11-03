import config  from '../../config';

module.exports = {
    resolve: {
        root: config.paths.CLIENT,
        alias: {
            styles: 'scss',
            scripts: 'js',
            containers: 'js/containers',
            reducers: 'js/reducers',
        },
        extensions: ['', '.js', '.jsx', '.scss']
    },
};