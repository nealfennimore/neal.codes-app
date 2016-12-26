import config  from '../../config';

module.exports = {
    resolve: {
        root: config.paths.ROOT,
        alias: {
            // Client paths
            client: 'client',
            styles: 'client/scss',
            scripts: 'client/js',
            actions: 'client/js/actions',
            containers: 'client/js/containers',
            components: 'client/js/components',
            reducers: 'client/js/reducers',
            services: 'client/js/services',
            lib: 'client/lib',
            // Server paths
            server: 'server',
            // Shared paths
            shared: 'shared'
        },
        extensions: ['', '.js', '.jsx', '.scss']
    },
};