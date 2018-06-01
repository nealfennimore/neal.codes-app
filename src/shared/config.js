export const HOSTNAME = process.env.VIRTUAL_HOST;
export const PROTOCOL = process.env.PROTOCOL;
export const NGINX_HOST = process.env.NGINX_CONTAINER;
export const HOST = `${PROTOCOL}://${HOSTNAME}`;
export const WEB_HOST = `${PROTOCOL}://${NGINX_HOST}`;

export default {
    hostname: HOSTNAME,
    protocol: PROTOCOL,
    host: HOST
};
