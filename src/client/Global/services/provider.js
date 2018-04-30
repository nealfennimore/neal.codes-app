import { HOST } from 'shared/config';
import { isBrowser } from 'shared/env';


export default function fetch() {
    return isBrowser && window.fetch( `${HOST}/api/posts` );
}
