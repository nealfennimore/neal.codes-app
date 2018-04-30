import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { truncate, cleanMarkdown } from 'shared/formatting';

import styles from './Post.scss';

const PostLeft = ({post}) => {
    return (
        <div className={`${styles.postLeft} column small-12 medium-8`}>
            <h2 className='h4'><Link to={`/blog/${post.slug}`}>{post.title}</Link></h2>
            <p>
                {truncate(cleanMarkdown(post.markdown), 170)}
                <Link to={`/blog/${post.slug}`} className={styles.readMore}>&#187;</Link>
            </p>
        </div>
    );
};

PostLeft.propTypes = {
    post: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        markdown: PropTypes.string.isRequired
    })
};

export default PostLeft;