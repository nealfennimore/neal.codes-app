import config  from '../../config';

module.exports = {
    resolve: {
        root: config.paths.ROOT,
        alias: {
            // Client paths
            client: 'client',
            styles: 'client/scss',
            scripts: 'client/js',
            containers: 'client/js/containers',
            components: 'client/js/components',
            reducers: 'client/js/reducers',
            // Server paths
            server: 'server'
        },
        extensions: ['', '.js', '.jsx', '.scss']
    },
};