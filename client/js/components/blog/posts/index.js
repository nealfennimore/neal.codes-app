import React, { Component, PropTypes } from 'react';
import get from 'lodash/get';
import size from 'lodash/size';

import { queryParams } from 'shared/blog';
import Loader from 'components/global/Loader';
import Pagination from 'components/blog/common/Pagination';
import Posts from 'components/blog/common/Posts';

export default class PostsPage extends Component {
    hasPosts(){
        const { blog } = this.props;
        return size(get(blog, 'posts.posts', [])) > 0;
    }

    componentDidMount(){
        if( !this.hasPosts() ){
            this.props.fetchPosts(queryParams);
        }
    }

    render() {
        const {
            blog: {posts},
            fetchPosts
        } = this.props;

        const { isFetching, posts:articles } = posts;
        const { pagination={} } = posts.meta;

        if( isFetching || !this.hasPosts() ){
            return <Loader />;
        }

        return (
            <div>
                <Posts posts={articles} />
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
        posts: PropTypes.shape({
            posts: PropTypes.arrayOf(React.PropTypes.object),
            meta: PropTypes.object
        }),
        post: PropTypes.object,
        tags: PropTypes.object
    }),
    fetchPosts: PropTypes.func.isRequired
};