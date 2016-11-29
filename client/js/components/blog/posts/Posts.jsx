import React, { PropTypes } from 'react';
import Post from 'components/blog/posts/Post';

const Posts = ({posts}) => {
    return (
        <ul className='row'>
            {posts.map(post=>(
                <Post key={post.id} post={post} />
            ))}
        </ul>
    );
};

Posts.propTypes = {
    posts: PropTypes.arrayOf(React.PropTypes.object)
};

export default Posts;