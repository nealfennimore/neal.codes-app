const env = require( 'dotenv' ).config();

module.exports = {
    apps: [
        {
            name: 'production',
            script: './dist/server_entry.js',
            env: {
                ...env,
                NODE_ENV: 'production'
            },
            instances: 'max',
            exec_mode: 'cluster',
        },
        {
            name: 'development',
            script: './src/server/index.js',
            exec_interpreter: 'babel-node',
            node_args: '--inspect=0.0.0.0:9229',
            env: {
                ...env,
                NODE_ENV: 'development',
                NODE_TLS_REJECT_UNAUTHORIZED: 0
            },
        }
    ]
};
