import React, {Component, PropTypes} from 'react';
import Loader from 'components/global/Loader';
import { GET_POST } from 'sagas/blog/post';
import { isServer } from 'shared/env';
import Article from './Article';

export default class Post extends Component {
    componentWillMount(){
        if(isServer){
            this.getPost();
        }
    }

    componentDidMount(){
        this.getPost();
    }

    getPost(){
        const { dispatch, blog, params: {slug} } = this.props;
        dispatch({
            type: GET_POST,
            blog,
            slug
        });
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
    params: PropTypes.shape({
        slug: PropTypes.string
    }).isRequired,
    blog: PropTypes.shape({
        post: PropTypes.object
    }).isRequired
};