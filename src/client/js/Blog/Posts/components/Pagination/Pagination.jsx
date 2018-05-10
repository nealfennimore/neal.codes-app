/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Pagination.pcss';

const Pagination = ( {
    nextPage,
    page,
    pages,
    prefix,
    prevPage,
} ) => {
    if( ! nextPage && ! prevPage ) {
        return null;
    }

    return (
        <footer className={styles.Pagination}>
            {
                !! prevPage && (
                    <Link to={`${prefix}/${prevPage}`}>
                        <i className='icon-arrow_left' />
                    </Link>
                )
            }
            <span>
                Page {page} of {pages}
            </span>
            {
                !! nextPage && (
                    <Link to={`${prefix}/${nextPage}`}>
                        <i className='icon-arrow_right' />
                    </Link>
                )
            }
        </footer>
    );
};

Pagination.propTypes = {
    nextPage: PropTypes.number,
    page: PropTypes.number,
    pages: PropTypes.number,
    prevPage: PropTypes.number,
    prefix: PropTypes.string,
};

export default Pagination;
