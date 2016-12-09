import React, { PropTypes } from 'react';

import PaginationButton from './PaginationButton';
import styles from './Pagination.scss';


const Pagination = ({ prefix, pagination: {prev, next, page, pages}}) => {
    if(!prev && !next){ return null; }

    return (
        <div className='row align-center align-middle'>
            { prev ? <PaginationButton page={prev} prefix={prefix} iconClass='icon-left_arrow' /> : null }

            <div className={`${styles.pages} column shrink`}>
                Page {page} of {pages}
            </div>

            { next ? <PaginationButton page={next} prefix={prefix} iconClass='icon-right_arrow' /> : null }
        </div>
    );
};

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    prefix: PropTypes.string.isRequired
};

export default Pagination;