import React from 'react';
import PropTypes from 'prop-types';
import Loader from './Loader';

const ComponentLoader = ( {
    pastDelay,
    error
} ) =>{
    if( error ) {
        return error;
    } else if ( pastDelay ) {
        return <Loader />;
    } else {
        return null;
    }
};

ComponentLoader.propTypes = {
    pastDelay: PropTypes.bool,
    error: PropTypes.string,
};

export default ComponentLoader;
