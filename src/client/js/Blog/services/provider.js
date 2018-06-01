import axios from 'axios';
import { __SERVER__ } from 'shared/env';
import { HOST, WEB_HOST } from 'shared/config';

const host = __SERVER__ ? WEB_HOST : HOST;

export default function provider() {
    return axios.create( {
        baseURL: `${host}/api`
    } );
}
