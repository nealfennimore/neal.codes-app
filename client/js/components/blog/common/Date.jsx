import React, { PropTypes } from 'react';
import moment from 'moment';

import styles from './Date.scss';

const Date = ({date}) => {
    return (
        <span className={styles.date}>
            {moment.utc(date).format('MMMM Do YYYY')}
        </span>
    );
};

Date.propTypes = {
    date: PropTypes.string.isRequired
};

export default Date;