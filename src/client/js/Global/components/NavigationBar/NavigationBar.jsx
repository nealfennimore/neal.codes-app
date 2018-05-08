/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logo from 'src/client/js/Global/components/Logo';
import styles from './NavigationBar.pcss';

const NavigationBar = ( props ) =>{
    return (
        <nav className={styles.NavigationBar}>
            <Link className={styles.logo} to="/">
                <Logo />
            </Link>
            <ul className={styles.menu}>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
            </ul>
        </nav>
    );
};

NavigationBar.propTypes = {};

export default NavigationBar;
