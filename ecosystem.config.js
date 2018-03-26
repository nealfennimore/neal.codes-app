module.exports = {
    apps: [
        {
            name: 'app',
            script: './dist/server.js',
            env: {
                'PORT': 3000,
                'NODE_ENV': 'development'
            },
            env_production: {
                'PORT': 80,
                'NODE_ENV': 'production',
            }
        }
    ]
};
