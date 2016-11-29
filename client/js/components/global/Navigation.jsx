import React, { PropTypes } from 'react';
import Logo from 'components/global/Logo';
import NavigationLinks from 'components/global/NavigationLinks';
import styles from './Navigation.scss';


const Navigation = (props) => {
    return (
        <nav className={`${styles.navigation} row align-middle align-justify`}>
            <Logo />
            <NavigationLinks />
        </nav>
    );
};

Navigation.propTypes = {

};

export default Navigation;