import React from 'react';
import PropTypes from 'prop-types';
import styles from './Layout.pcss';

const Layout = ( {
    children
} ) =>{
    return (
        <div className={styles.Layout}>
            { children }
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
