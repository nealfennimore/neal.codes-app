import React, { PropTypes } from 'react';
import Pagination from 'components/blog/posts/Pagination';
import Posts from 'components/blog/posts/Posts';

const PostsPage = ({
    blog: {posts, meta: {pagination}},
    fetchPosts,
    queryParams
}) => {
    return (
        <div>
            <Posts posts={posts} />
            <Pagination
                pagination={pagination}
                onClick={fetchPosts}
                queryParams={queryParams}
            />
        </div>
    );
};

PostsPage.propTypes = {
    blog: PropTypes.shape({
        posts: PropTypes.arrayOf(React.PropTypes.object),
        meta: PropTypes.object
    }),
    fetchPosts: PropTypes.func.isRequired,
    queryParams: PropTypes.object.isRequired
};

export default PostsPage;