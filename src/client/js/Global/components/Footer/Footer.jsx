/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import WithInverse from 'src/client/js/Global/hoc/WithInverse';
import styles from './Footer.pcss';

const Footer = ( {
    className
} ) =>{
    return (
        <footer className={classnames( styles.Footer, className )}>
            <Link to="/">neal.codes</Link>
            <span>©</span>
            <span>{new Date().getFullYear()}</span>
        </footer>
    );
};

Footer.propTypes = {
    className: PropTypes.string
};

export default WithInverse( styles, Footer );
