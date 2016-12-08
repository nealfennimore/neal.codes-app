import React, { PropTypes } from 'react';

import PaginationButton from './PaginationButton';
import styles from './Pagination.scss';


const Pagination = ({pagination: {prev, next, page, pages}, onClick}) => {
    if(!prev && !next){ return null; }

    return (
        <div className='row align-center align-middle'>
            { prev ? <PaginationButton onClick={()=>onClick(prev)} iconClass='icon-left_arrow' /> : null }

            <div className={`${styles.pages} column shrink`}>
                Page {page} of {pages}
            </div>

            { next ? <PaginationButton onClick={()=>onClick(next)} iconClass='icon-right_arrow' /> : null }
        </div>
    );
};

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Pagination;