import universal from 'react-universal-component';
import Loader from 'client/js/Global/components/Loader/ComponentLoader';

export default ( _import, options = {} )=> universal( _import, {
    loading: Loader,
    ...options
} );
