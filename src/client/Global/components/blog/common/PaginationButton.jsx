import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Pagination.scss';

const PaginationButton = ({prefix, page, iconClass}) => {
    const url = page === 1 ? prefix : `${prefix}/page/${page}`;

    return (
        <Link to={url} className={`${styles.button} column shrink`}>
            <i className={iconClass}></i>
        </Link>
    );
};

PaginationButton.propTypes = {
    page: PropTypes.number.isRequired,
    prefix: PropTypes.string.isRequired,
    iconClass: PropTypes.string.isRequired
};

export default PaginationButton;