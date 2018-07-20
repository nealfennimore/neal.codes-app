import universal from 'react-universal-component';
import Loader from 'client/js/Global/components/Loader/MainLoader.jsx';

export default ( _import, options = {} )=> universal( _import, {
    loading: Loader,
    minDelay: 300,
    ...options
} );
