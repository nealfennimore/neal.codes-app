import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { truncate } from 'shared/formatting';

const PostLeft = ({post}) => {
    return (
        <div className="column small-8">
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            <p>
                {truncate(post.markdown, 150)}
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