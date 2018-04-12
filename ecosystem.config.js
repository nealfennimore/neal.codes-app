module.exports = {
    apps: [
        {
            name: 'production',
            script: './dist/server.js',
            env: {
                'PORT': 3000,
                'HOSTNAME': '127.0.0.1',
                'NODE_ENV': 'production'
            }
        },
        {
            name: 'development',
            script: './src/server/index.js',
            exec_interpreter: 'babel-node',
            env: {
                'PORT': 3000,
                'HOSTNAME': '127.0.0.1',
                'NODE_ENV': 'development'
            },
        }
    ]
};
