import axios from 'axios';
import { HOST, WEB_HOST } from 'shared/config';
import { __SERVER__ } from 'shared/env';

export default function provider() {
    return axios.create( {
        baseURL: `${ __SERVER__ ? WEB_HOST : HOST}/api`
    } );
}
