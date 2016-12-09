import React, { Component, PropTypes } from 'react';
import get from 'lodash/get';
import size from 'lodash/size';

import { fetchPage, fetchPageIfNeeded } from 'actions/blog/posts';
import Loader from 'components/global/Loader';
import Pagination from 'components/blog/common/Pagination';
import Posts from 'components/blog/common/Posts';

export default class PostsPage extends Component {
    componentDidMount(){
        const { dispatch } = this.props;
        dispatch(fetchPageIfNeeded(this.props));
    }

    componentWillReceiveProps(nextProps){
        const oldPage = get(this.props, 'params.page');
        const newPage = get(nextProps, 'params.page');

        if(oldPage != newPage){
            const { dispatch } = this.props;
            dispatch(fetchPage(newPage));
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

PostsPage.fetchData = ({store, router}) => {
    const page = get(router, 'params.page', 1);
    return store.dispatch(fetchPage(page));
};

PostsPage.propTypes = {
    blog: PropTypes.shape({
        posts: PropTypes.shape({
            posts: PropTypes.arrayOf(React.PropTypes.object),
            meta: PropTypes.shape({
                pagination: PropTypes.object
            })
        })
    }),
    params: PropTypes.shape({
        page: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])
    }),
    dispatch: PropTypes.func
};