module.exports = {
    apps: [
        {
            name: 'app',
            script: './dist/server.js',
            env: {
                'PORT': 3000,
                'HOSTNAME': '127.0.0.1',
                'NODE_ENV': 'development'
            },
            env_production: {
                'PORT': 80,
                'HOSTNAME': '0.0.0.0',
                'NODE_ENV': 'production',
            }
        }
    ]
};
