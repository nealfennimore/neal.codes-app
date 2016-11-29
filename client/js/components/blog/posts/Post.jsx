import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { truncate } from 'shared/formatting';

const Post = ({post}) => {
    return (
        <li className='small-12 column'>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            <p>
                {truncate(post.markdown, 150)}
            </p>
        </li>
    );
};

Post.propTypes = {
    post: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        markdown: PropTypes.string.isRequired
    })
};

export default Post;