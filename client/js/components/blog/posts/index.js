import React, { Component, PropTypes } from 'react';
import get from 'lodash/get';
import size from 'lodash/size';

import { fetchPage as fetchPageAction } from 'actions/blog/posts';
import { setPostsPage } from 'shared/blog';
import Loader from 'components/global/Loader';
import Pagination from 'components/blog/common/Pagination';
import Posts from 'components/blog/common/Posts';

export default class PostsPage extends Component {
    constructor(props){
        super(props);
        this.changePage = this.changePage.bind(this);
    }

    componentDidMount(){
        if( !this.hasPosts() ){
            this.getPosts();
        }
        console.log('mounted');
    }

    shouldComponentUpdate(nextProps){
        return this.hasPageChanged(nextProps) || this.hasPageParamsChanged(nextProps);
    }

    componentWillUpdate(nextProps){
        if(this.hasPageParamsChanged(nextProps)){
            const page = get(nextProps, 'params.page', 1);
            this.changePage(page);
        }
    }

    hasPosts(){
        const { blog } = this.props;
        return size(get(blog, 'posts.posts', [])) > 0;
    }

    shouldPageUpdate(nextProps){
        const nextParamsPage    = get(nextProps, 'params.page', 1);
        const currentParamsPage = get(this.props, 'params.page', 1);

        const nextPage    = get(nextProps, 'blog.posts.meta.pagination.page', 1);
        const currentPage = get(this.props, 'blog.posts.meta.pagination.page', 1);

        console.table([{
            nextPage,
            nextParamsPage,
            currentPage,
            currentParamsPage
        }])

        return nextParamsPage != currentParamsPage && nextPage != currentPage;
    }

    hasPageChanged(nextProps){
        const nextPage    = get(nextProps, 'blog.posts.meta.pagination.page', 1);
        const currentPage = get(this.props, 'blog.posts.meta.pagination.page', 1);

        console.table([{
            nextPage,
            currentPage
        }])

        return nextPage != currentPage;
    }

    hasPageParamsChanged(nextProps){
        const nextParamsPage    = get(nextProps, 'params.page', 1);
        const currentParamsPage = get(this.props, 'params.page', 1);

        console.table([{
            nextParamsPage,
            currentParamsPage
        }])

        return nextParamsPage != currentParamsPage;
    }

    getPosts(){
        const { params } = this.props;
        const page = get(params, 'page', 1);
        this.changePage(page);
    }

    changePage(page){
        const { fetchPage } = this.props;
        setPostsPage(page);
        fetchPage(page);
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
                <Pagination
                    pagination={pagination}
                    onClick={this.changePage}
                />
            </div>
        );
    }
}

PostsPage.fetchData = ({store, router}) => {
    const page = get(router, 'params.page', 1);
    return store.dispatch(fetchPageAction(page));
};

PostsPage.propTypes = {
    blog: PropTypes.shape({
        posts: PropTypes.shape({
            posts: PropTypes.arrayOf(React.PropTypes.object),
            meta: PropTypes.object
        }),
        post: PropTypes.object,
        tags: PropTypes.object
    }),
    fetchPosts: PropTypes.func,
    fetchPage: PropTypes.func,
    params: PropTypes.object
};