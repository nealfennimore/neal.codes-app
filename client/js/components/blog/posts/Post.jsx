import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const truncate = (str)=> {
    const MAX_SIZE = 150;
    const newStr = str.slice(0, MAX_SIZE).trim();

    if(newStr.length >= MAX_SIZE){
        return newStr.replace(/(\s*\w*)$/m, '...');
    } else {
        return newStr;
    }
};

const Post = ({post}) => {
    return (
        <li>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            <p>
                {truncate(post.markdown)}
            </p>
        </li>
    );
};

Post.propTypes = {
    post: PropTypes.object.isRequired
};

export default Post;