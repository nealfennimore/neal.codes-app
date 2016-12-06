import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import moment from 'moment';

import styles from './Footer.scss';

const Footer = () => {
    return (
        <footer className={`row expanded align-middle ${styles.footer}`}>
            <div className="column">
                <Link to='/'>neal.codes</Link> &copy; {moment.utc().format('YYYY')}
            </div>
        </footer>
    );
};

Footer.propTypes = {

};

export default Footer;