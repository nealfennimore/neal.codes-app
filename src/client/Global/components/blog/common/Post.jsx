import React, { PropTypes } from 'react';
import styles from './Post.scss';
import PostLeft from './PostLeft';
import PostRight from './PostRight';

const Post = ({post}) => {
    return (
        <article className={`small-12 column ${styles.post}`}>
            <div className="row align-justify align-middle">
                <PostLeft post={post}/>
                <PostRight post={post}/>
            </div>
        </article>
    );
};

Post.propTypes = {
    post: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        markdown: PropTypes.string.isRequired,
        tags: PropTypes.array.isRequired
    })
};

export default Post;