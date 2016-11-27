import React, { PropTypes } from 'react';
import Pagination from 'components/blog/posts/Pagination';
import Posts from 'components/blog/posts/Posts';

const PostsPage = ({
    blog: {posts, meta: {pagination}},
    fetchPosts
}) => {
    return (
        <div>
            <Posts posts={posts} />
            <Pagination
                pagination={pagination}
                onClick={fetchPosts}
            />
        </div>
    );
};

PostsPage.propTypes = {
    blog: PropTypes.shape({
        posts: PropTypes.arrayOf(React.PropTypes.object),
        meta: PropTypes.object
    }),
    fetchPosts: PropTypes.func.isRequired
};

export default PostsPage;