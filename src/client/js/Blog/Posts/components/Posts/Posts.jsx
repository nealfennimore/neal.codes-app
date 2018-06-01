import React, { Fragment } from 'react';
import { PostsPropType } from 'client/js/Global/proptypes/post';
import Post from 'client/js/Blog/Posts/components/Post';

const Posts = ( {
    posts
} ) =>{
    if( ! posts.length ) {
        return null;
    }

    return (
        <Fragment>
            {
                posts.map( ( post )=>(
                    <Post key={post.id} {...post} />
                ) )
            }
        </Fragment>
    );
};

Posts.propTypes = PostsPropType;

export default Posts;
