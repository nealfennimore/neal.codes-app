import React, { PropTypes } from 'react';
import moment from 'moment';

import styles from './Date.scss';

const Date = ({date, className=''}) => {
    return (
        <time dateTime={date} className={`${styles.date} ${className}`}>
            {moment.utc(date).format('MMMM Do YYYY')}
        </time>
    );
};

Date.propTypes = {
    date: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default Date;