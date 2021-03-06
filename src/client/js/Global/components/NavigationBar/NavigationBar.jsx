/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { NavLink, Link } from 'react-router-dom';
import { compose } from 'redux';
import classnames from 'classnames';
import Logo from 'src/client/js/Global/components/Logo';
import WithInverse from 'src/client/js/Global/hoc/WithInverse';
import styles from './NavigationBar.pcss';

const NavigationBar = ( {
    className
} ) =>{
    return (
        <nav className={classnames( styles.NavigationBar, className )}>
            <Link className={styles.logo} to="/" title="Logo">
                <Logo />
            </Link>
            <ul className={styles.menu}>
                <li>
                    <NavLink to="/projects" exact activeClassName={styles.active}>Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/blog" activeClassName={styles.active}>Blog</NavLink>
                </li>
            </ul>
        </nav>
    );
};

NavigationBar.propTypes = {
    className: PropTypes.string
};

const enhance = compose(
    withRouter,
    WithInverse( styles )
);

export default enhance( NavigationBar );
