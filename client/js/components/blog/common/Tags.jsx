import React, { PropTypes } from 'react';
import Tag from 'components/blog/common/Tag';
import styles from './Tags.scss';

const Tags = ({tags=[], className=''})=> {
    if(!tags.length){ return null; }

    return (
        <ul className={`${styles.tags} ${className}`}>
            {tags.map((tag)=> (
                <li key={tag.id}>
                    <Tag tag={tag} />
                </li>
            ))}
        </ul>
    );
};

Tags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.object),
    className: PropTypes.string
};

export default Tags;