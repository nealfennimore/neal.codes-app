import config  from '../../config';

module.exports = {
    resolve: {
        root: config.paths.CLIENT,
        alias: {
            styles: 'scss',
            scripts: 'js',
            containers: 'js/containers',
            components: 'js/components',
            reducers: 'js/reducers',
            routes: 'js/routes'
        },
        extensions: ['', '.js', '.jsx', '.scss']
    },
};