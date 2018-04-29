module.exports = {
    apps: [
        {
            name: 'production',
            script: './dist/server.js',
            env: {
                'PORT': 3000,
                'IP_ADDR': '0.0.0.0',
                'NODE_ENV': 'production',
                'HOSTNAME': 'neal.codes'
            }
        },
        {
            name: 'development',
            script: './src/server/index.js',
            exec_interpreter: 'babel-node',
            env: {
                'PORT': 3000,
                'IP_ADDR': '0.0.0.0',
                'NODE_ENV': 'development',
                'HOSTNAME': 'neal.codes.test'
            },
        }
    ]
};
