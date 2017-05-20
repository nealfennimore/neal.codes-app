import config  from '../../config';

module.exports = {
    resolve: {
        modules: [
            config.paths.ROOT,
            'node_modules'
        ],
        alias: {
            // Client paths
            client: 'client',
            images: 'client/images',
            styles: 'client/scss',
            scripts: 'client/js',
            actions: 'client/js/actions',
            sagas: 'client/js/sagas',
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
    responsiveLoader: {
        name: '[name]-[width]',
        sizes: [300, 480, 768],
        placeholder: false
    },
};