import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Post = ({post}) => {
    return (
        <li>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
    );
};

Post.propTypes = {
    post: PropTypes.object.isRequired
};

export default Post;