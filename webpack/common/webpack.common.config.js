import {
    paths: {CLIENT}
}  from '../../config';

module.exports = {
    resolve: {
        root: CLIENT,
        alias: {
            styles: 'scss',
            scripts: 'js',
            containers: 'js/containers',
            reducers: 'js/reducers',
        },
        extensions: ['', '.js', '.jsx', '.scss']
    },
};