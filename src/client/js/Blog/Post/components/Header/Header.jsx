/* eslint-disable camelcase */
import React from 'react';
import classnames from 'classnames';
import { PostPropType } from 'client/js/Global/proptypes/post';
import isAfter from 'date-fns/is_after';
import {
    getTitle,
    getPublishedAt,
    getUpdatedAt,
    getTags,
    getFeatureImage,
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
    const image = getFeatureImage( post );

    return (
        <header className={classnames( styles.Header, {
            [styles.featured]: image
        } )}
        >
            {
                image && (
                    <img src={image} alt="" />
                )
            }

            <div className={styles.content}>
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
            </div>

        </header>
    );
};

Header.propTypes = {
    post: PostPropType
};

export default Header;
