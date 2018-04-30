import React, { PropTypes } from 'react';
import styles from './Loader.scss';

const Loader = (props) => {
    return (
        <i className={`icon-loader ${styles.loader}`}></i>
    );
};

Loader.propTypes = {

};

export default Loader;