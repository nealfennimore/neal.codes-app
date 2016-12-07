import React, { PropTypes } from 'react';
import merge from 'lodash/merge';

import PaginationButton from './PaginationButton';
import { queryParams } from 'shared/blog';
import styles from './Pagination.scss';

const getParams = (page)=>merge({}, queryParams, {params: {page}});

const Pagination = ({pagination: {prev, next, page, pages}, onClick}) => {
    if(!prev && !next){ return null; }

    const getPage = (page)=>onClick(getParams(page));

    return (
        <div className='row align-center align-middle'>
            { prev ? <PaginationButton onClick={()=>getPage(prev)} iconClass='icon-left_arrow' /> : null }

            <div className={`${styles.pages} column shrink`}>
                Page {page} of {pages}
            </div>

            { next ? <PaginationButton onClick={()=>getPage(next)} iconClass='icon-right_arrow' /> : null }
        </div>
    );
};

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Pagination;