import React, { Component, PropTypes } from 'react';
import get from 'lodash/get';
import size from 'lodash/size';
import isEmpty from 'lodash/isEmpty';

import { REQUEST_POSTS } from 'sagas/blog/posts';
import Loader from 'components/global/Loader';
import Pagination from 'components/blog/common/Pagination';
import Posts from 'components/blog/common/Posts';

export default class PostsPage extends Component {
    componentWillMount(){
        this.fetchPostsIfNeeded();
    }

    componentDidMount(){
        this.fetchPostsIfNeeded();
    }

    componentWillReceiveProps(nextProps){
        const oldPage = get(this.props, 'params.page');
        const page    = get(nextProps, 'params.page');

        if(oldPage != page){
            const { dispatch } = this.props;
            dispatch({
                type: REQUEST_POSTS,
                page
            });
        }
    }

    fetchPostsIfNeeded(){
        const { dispatch, blog, params } = this.props;
        const posts       = get(blog, 'posts', false);
        const page        = get(params, 'page', 1);
        const currentPage = get(posts, 'meta.pagination.page');

        if( page != currentPage || isEmpty(posts) ){
            dispatch({
                type: REQUEST_POSTS,
                page
            });
        }
    }

    hasPosts(){
        const { blog } = this.props;
        return size(get(blog, 'posts.posts', [])) > 0;
    }

    render() {
        const {
            blog: {posts}
        } = this.props;

        const { isFetching, posts:articles, meta } = posts;
        const pagination = get(meta, 'pagination', {});

        if( isFetching || !this.hasPosts() ){
            return <Loader />;
        }

        return (
            <div>
                <Posts posts={articles} />
                <Pagination pagination={pagination} prefix='/blog' />
            </div>
        );
    }
}

PostsPage.propTypes = {
    blog: PropTypes.shape({
        posts: PropTypes.shape({
            posts: PropTypes.arrayOf(React.PropTypes.object),
            meta: PropTypes.shape({
                pagination: PropTypes.object
            })
        })
    }).isRequired,
    params: PropTypes.shape({
        page: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])
    }).isRequired,
    dispatch: PropTypes.func.isRequired
};