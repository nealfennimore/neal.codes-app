import React, { Component, PropTypes } from 'react';
import get from 'lodash/get';
import size from 'lodash/size';
import first from 'lodash/first';

import { fetchPage as fetchPageAction } from 'actions/blog/posts';
import Loader from 'components/global/Loader';
import Pagination from 'components/blog/common/Pagination';
import Posts from 'components/blog/common/Posts';

export default class PostsPage extends Component {
    componentDidMount(){
        const { location, fetchPage } = this.props;
        const path = get(location, 'pathname');

        if( !this.hasPosts() || !this.hasPostsForPage(path) ){ // Fixes posts not updating when browser backing to /blog
            const page = this.getPage(path);
            fetchPage(page);
        }
    }

    componentWillReceiveProps(nextProps){
        const oldPath = get(this.props, 'location.pathname');
        const newPath = get(nextProps, 'location.pathname');

        if(oldPath !== newPath){
            const page = this.getPage(newPath);
            this.props.fetchPage(page);
        }
    }

    getPage(path){
        return path === '/blog' ? 1 : first(path.match(/\d*$/));
    }

    hasPostsForPage(path){
        const currentPage = get(this.props, 'blog.posts.meta.pagination.page');
        return this.getPage(path) == currentPage;
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
                <Pagination pagination={pagination} />
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
    fetchPage: PropTypes.func,
    location: PropTypes.object
};