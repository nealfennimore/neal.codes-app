import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { truncate } from 'shared/formatting';

const Post = ({post}) => {
    return (
        <li>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            <p>
                {truncate(post.markdown, 150)}
            </p>
        </li>
    );
};

Post.propTypes = {
    post: PropTypes.object.isRequired
};

export default Post;