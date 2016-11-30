import React, { Component, PropTypes } from 'react';
import get from 'lodash/get';
import size from 'lodash/size';

import { queryParams } from 'shared/blog';
import Loader from 'components/global/Loader';
import Pagination from 'components/blog/posts/Pagination';
import Posts from 'components/blog/posts/Posts';

export default class PostsPage extends Component {
    hasPosts(){
        const { blog } = this.props;
        return size(get(blog, 'posts', [])) > 0;
    }

    componentDidMount(){
        if( !this.hasPosts() ){
            this.props.fetchPosts(queryParams);
        }
    }

    render() {
        const {
            blog: {isFetching, posts, meta: {pagination}},
            fetchPosts
        } = this.props;

        if( isFetching || !this.hasPosts() ){
            return <Loader />;
        }

        return (
            <div>
                <Posts posts={posts} />
                <Pagination
                    pagination={pagination}
                    onClick={fetchPosts}
                />
            </div>
        );
    }
}

PostsPage.propTypes = {
    blog: PropTypes.shape({
        posts: PropTypes.arrayOf(React.PropTypes.object),
        meta: PropTypes.object
    }),
    fetchPosts: PropTypes.func.isRequired
};