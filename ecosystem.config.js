const env = require( 'dotenv' ).config();

module.exports = {
    apps: [
        {
            name: 'production',
            script: './dist/server.js',
            env: {
                ...env,
                NODE_ENV: 'production'
            }
        },
        {
            name: 'development',
            script: './src/server/index.js',
            exec_interpreter: 'babel-node',
            env: {
                ...env,
                NODE_ENV: 'development',
                NODE_TLS_REJECT_UNAUTHORIZED: 0
            },
        }
    ]
};
