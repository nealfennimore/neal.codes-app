import webpack from 'webpack';
import config  from '../../config';

export default {
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
            routes: 'client/js/routes',
            lib: 'client/lib',
            // Server paths
            server: 'server',
            // Shared paths
            shared: 'shared'
        },
        extensions: ['.js', '.jsx', '.scss']
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                imageWebpackLoader: {
                    pngquant: {
                        quality: '65-90',
                        speed: 4
                    },
                    svgo: {
                        plugins: [{
                            removeViewBox: false
                        }, {
                            removeEmptyAttrs: false
                        }]
                    }
                }
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: false, // Disallow babelrc
                        presets: [
                            [
                                'es2015', { modules: false }
                            ],
                            'react',
                            'stage-3'
                        ],
                        plugins: [
                            'babel-plugin-syntax-dynamic-import',
                            'babel-plugin-transform-object-rest-spread',
                            'babel-plugin-transform-regenerator',
                        ]
                    }
                }
            }
        ]
    }
};
