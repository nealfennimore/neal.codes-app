import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Loader.pcss';

const Loader = ( {
    className
} ) => {
    return (
        <i className={
            classnames(
                'icon-loader',
                styles.Loader,
                className
            )}
        />
    );
};

Loader.propTypes = {
    className: PropTypes.string
};

export default Loader;
