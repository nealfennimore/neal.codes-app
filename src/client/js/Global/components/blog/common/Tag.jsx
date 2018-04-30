import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './Tag.scss';

const Tag = ({tag: {name, slug}}) => {
    return (
        <Link to={`/blog/tag/${slug}`} className={styles.tag}>
            {name}
        </Link>
    );
};

Tag.propTypes = {
    tag: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired
    })
};

export default Tag;