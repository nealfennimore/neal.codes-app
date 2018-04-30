import React, { Component, PropTypes } from 'react';
import get from 'lodash/get';
import size from 'lodash/size';

import Loader from 'components/global/Loader';
import Pagination from 'components/blog/common/Pagination';
import Posts from 'components/blog/common/Posts';

export default class PostsPage extends Component {
    componentDidMount(){
        this.props.getPosts(this.props);
    }

    componentWillReceiveProps(nextProps){
        const page     = get(this.props, 'params.page');
        const nextPage = get(nextProps, 'params.page');

        if(page != nextPage){
            this.props.getPosts(nextProps);
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
    }),
    getPosts: PropTypes.func.isRequired
};