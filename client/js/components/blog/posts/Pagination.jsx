import React, { PropTypes } from 'react';
import merge from 'lodash/merge';

const mergeQuery = (page, queryParams)=>merge({}, queryParams, {queryParams: {page}});

const Pagination = ({pagination: {prev, next}, onClick, queryParams}) => {
    if(!prev && !next){ return null; }

    const getPage = (page)=>onClick(mergeQuery(page, queryParams));

    return (
        <div>
            { prev ? <button onClick={()=>getPage(prev)}>Previous</button> : null }
            { next ? <button onClick={()=>getPage(next)}>Next</button> : null }
        </div>
    );
};

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    queryParams: PropTypes.object.isRequired
};

export default Pagination;