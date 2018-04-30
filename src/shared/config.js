export const { HOSTNAME, PROTOCOL } = process.env;

export default {
    hostname: HOSTNAME,
    protocol: PROTOCOL,
    host: `${PROTOCOL}://${HOSTNAME}`
};
