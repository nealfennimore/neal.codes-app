import React from 'react';
import PropTypes from 'prop-types';
import Loader from './Loader';

const ComponentLoader = ( {
    pastDelay
} ) =>{
    if ( pastDelay ) {
        return <Loader />;
    } else {
        return null;
    }
};

ComponentLoader.propTypes = {
    pastDelay: PropTypes.bool
};

export default ComponentLoader;
