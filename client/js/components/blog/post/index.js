import React, {Component, PropTypes} from 'react';

import Loader from 'components/global/Loader';
import Article from './Article';
import { fetchPostIfNeeded, fetchPost } from 'actions/blog/post';
import hljs from 'lib/highlight';

export default class Post extends Component {
    componentDidMount(){
        const { dispatch } = this.props;
        dispatch(fetchPostIfNeeded(this.props))
            .then(this.highlight);
    }

    highlight(){
        const codeBlocks = Array.from( document.querySelectorAll('pre code') );
        codeBlocks.forEach(block => hljs.highlightBlock(block));
    }

    render() {
        const { blog: {isFetching, post} } = this.props;
        return (
            !isFetching && post ?
            <Article post={post} /> :
            <Loader />
        );
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
        post: PropTypes.object
    })
};