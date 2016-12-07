import React, { PropTypes } from 'react';
import styles from './Pagination.scss';

const PaginationButton = ({onClick, iconClass}) => {
    return (
        <button className={`${styles.button} column shrink`} onClick={onClick}>
            <i className={iconClass}></i>
        </button>
    );
};

PaginationButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    iconClass: PropTypes.string.isRequired
};

export default PaginationButton;