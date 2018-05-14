import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import format from 'date-fns/format';
import styles from './Date.pcss';

const DateComponent = ( {
    date,
    className,
} ) => {
    return (
        <time
            dateTime={date}
            className={classnames( styles.Date, className )}
        >
            { format( date, 'MMMM Do, YYYY' ) }
        </time>
    );
};

DateComponent.propTypes = {
    date: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default DateComponent;
