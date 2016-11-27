import React, { PropTypes } from 'react';
import merge from 'lodash/merge';
import { queryParams } from 'shared/blog';

const getParams = (page)=>merge({}, queryParams, {queryParams: {page}});

const Pagination = ({pagination: {prev, next}, onClick}) => {
    if(!prev && !next){ return null; }

    const getPage = (page)=>onClick(getParams(page));

    return (
        <div>
            { prev ? <button onClick={()=>getPage(prev)}>Previous</button> : null }
            { next ? <button onClick={()=>getPage(next)}>Next</button> : null }
        </div>
    );
};

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Pagination;