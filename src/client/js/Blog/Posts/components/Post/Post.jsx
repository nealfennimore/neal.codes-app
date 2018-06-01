/* eslint-disable jsx-a11y/anchor-is-valid, camelcase */
import React from 'react';
import { Link } from 'react-router-dom';
import format from 'date-fns/format';
import { PostPropType } from 'client/js/Global/proptypes/post';
import Tags from 'client/js/Blog/Tags/components/Tags';
import { truncate } from 'lodash';
import styles from './Post.pcss';

const Post = ( {
    plaintext,
    published_at,
    slug,
    tags,
    title,
} ) =>{
    return (
        <article className={styles.Post}>
            <section>
                <header>
                    <h2 className="h3">
                        <Link to={`/blog/${slug}`}>
                            {title}
                        </Link>
                    </h2>
                </header>
                <p>
                    { truncate( plaintext, { length: 150 } ) }
                </p>
            </section>
            <footer>
                <time dateTime={published_at}>
                    { format( published_at, 'MMMM Do, YYYY' ) }
                </time>
                <Tags tags={tags} />
            </footer>
        </article>
    );
};

Post.propTypes = PostPropType;

export default Post;
