import React, {Component, PropTypes} from 'react';

import Loader from 'components/global/Loader';
import Article from './Article';
import { fetchPostIfNeeded, fetchPost } from 'actions/blog/post';

export default class Post extends Component {
    componentDidMount(){
        const { dispatch } = this.props;
        dispatch(fetchPostIfNeeded(this.props))
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

Post.propTypes = {
    dispatch: PropTypes.func.isRequired,
    blog: PropTypes.shape({
        post: PropTypes.object
    }).isRequired
};