import React, {Component, PropTypes} from 'react';
import Loader from 'components/global/Loader';
import Article from './Article';

export default class Post extends Component {
    componentDidMount(){
        this.props.getPost(this.props);
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
    getPost: PropTypes.func.isRequired,
    params: PropTypes.shape({
        slug: PropTypes.string
    }).isRequired,
    blog: PropTypes.shape({
        post: PropTypes.object
    }).isRequired
};