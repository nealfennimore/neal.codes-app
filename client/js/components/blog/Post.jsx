import React, {Component, PropTypes} from 'react';

import { fetchPostIfNeeded, fetchPost } from 'actions/blogActions';

export default class Post extends Component {
    componentDidMount(){
        const { dispatch } = this.props;
        dispatch(fetchPostIfNeeded(this.props));
    }

    createMarkup(){
        const { blog: {post} } = this.props;
        return { __html: post.html };
    }

    render() {
        const { blog: {isFetching, post} } = this.props;
        return (!isFetching && post ? <article dangerouslySetInnerHTML={this.createMarkup()} /> : <div>Loading</div>);
    }
}

Post.fetchData = ({
    store: {dispatch},
    router: {params: {slug}}
}) => dispatch(fetchPost({slug}));

Post.propTypes = {
    dispatch: PropTypes.func,
    params: PropTypes.shape({
        slug: PropTypes.string.isRequired
    }),
    blog: PropTypes.shape({
        posts: PropTypes.array,
        meta: PropTypes.object
    })
};