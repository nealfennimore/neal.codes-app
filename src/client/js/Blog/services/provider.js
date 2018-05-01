import axios from 'axios';
import { HOST } from 'shared/config';

export default function provider() {
    return axios.create( {
        baseURL: `${HOST}/api`
    } );
}
