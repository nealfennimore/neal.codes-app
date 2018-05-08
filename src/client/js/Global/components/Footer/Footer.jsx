/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Footer.pcss';

const Footer = ( props ) =>{
    return (
        <footer className={styles.Footer}>
            <Link to="/">neal.codes</Link>
            <span>©</span>
            <span>{new Date().getFullYear()}</span>
        </footer>
    );
};

Footer.propTypes = {};

export default Footer;
