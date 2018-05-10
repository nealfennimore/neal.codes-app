import React from 'react';
import { TagsPropType } from 'client/js/Global/proptypes/tag';
import Tag from 'client/js/Blog/Tags/components/Tag';
import styles from './Tags.pcss';

const Tags = ( {
    tags
} ) =>{
    if( ! tags.length ) {
        return null;
    }

    return (
        <ul className={styles.Tags}>
            {
                tags.map( tag => (
                    <li key={tag.id}>
                        <Tag {...tag} />
                    </li>
                ) )
            }
        </ul>
    );
};

Tags.propTypes = TagsPropType;

export default Tags;
