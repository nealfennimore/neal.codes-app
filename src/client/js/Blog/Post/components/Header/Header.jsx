/* eslint-disable camelcase */
import React from 'react';
import { PostPropType } from 'client/js/Global/proptypes/post';
import isAfter from 'date-fns/is_after';
import {
    getTitle,
    getPublishedAt,
    getUpdatedAt,
    getTags,
} from 'client/js/Global/selectors/post';
import Tags from 'client/js/Blog/Tags/components/Tags';
import Date from '../Date';
import styles from './Header.pcss';

const Header = ( {
    post
} ) => {
    const published = getPublishedAt( post );
    const updated = getUpdatedAt( post );
    const isUpdated = isAfter( updated, published );

    return (
        <header className={styles.Header}>
            <h1>
                { getTitle( post ) }
            </h1>

            <div className={styles.meta}>
                <div>
                    <small>
                        Published
                        <Date date={published} className={styles.date} />
                    </small>
                    {
                        isUpdated && (
                            <small>
                                <br />Last updated
                                <Date date={updated} className={styles.date} />
                            </small>
                        )
                    }
                </div>
                <div>
                    <Tags tags={getTags( post )} />
                </div>
            </div>

        </header>
    );
};

Header.propTypes = {
    post: PostPropType
};

export default Header;
