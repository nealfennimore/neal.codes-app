import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Main.pcss';

const Main = ( {
    children,
    className
} ) =>{
    return (
        <main className={classnames( styles.Main, className )}>
            { children }
        </main>
    );
};

Main.defaultProps = {
    className: ''
};

Main.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

export default Main;
