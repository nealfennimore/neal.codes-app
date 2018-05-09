/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Pagination.pcss';

const Pagination = ( { nextPage, prevPage, page, pages } ) => {
    if( ! nextPage && ! prevPage ) {
        return null;
    }

    return (
        <footer className={styles.Pagination}>
            {
                !! prevPage && (
                    <Link to={`/blog/page/${prevPage}`}>
                        <i className='icon-arrow_left' />
                    </Link>
                )
            }
            <span>
                Page {page} of {pages}
            </span>
            {
                !! nextPage && (
                    <Link to={`/blog/page/${nextPage}`}>
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
};

export default Pagination;
