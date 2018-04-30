import React, { PropTypes } from 'react';
import Post from 'components/blog/common/Post';

const Posts = ({posts}) => {
    return (
        <div className='row'>
            {posts.map(post=>(
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
};

Posts.propTypes = {
    posts: PropTypes.arrayOf(React.PropTypes.object)
};

export default Posts;