export const HOSTNAME = process.env.VIRTUAL_HOST;
export const PROTOCOL = process.env.PROTOCOL;
export const HOST = `${PROTOCOL}://${HOSTNAME}`;

export default {
    hostname: HOSTNAME,
    protocol: PROTOCOL,
    host: HOST,
};
