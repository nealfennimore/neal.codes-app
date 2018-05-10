/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { TagPropType } from 'client/js/Global/proptypes/tag';
import styles from './Tag.pcss';

const Tag = ( {
    slug,
    name
} ) =>{
    return (
        <Link
            to={`/blog/tag/${slug}`}
            className={styles.Tag}
        >
            {name}
        </Link>
    );
};

Tag.propTypes = TagPropType;

export default Tag;
