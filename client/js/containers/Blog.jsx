import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from 'actions/blogActions';

class Blog extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                I'm blog
            </div>
        );
    }
}

Blog.fetchData = ({store}) => store.dispatch(fetchPosts());

Blog.propTypes = {

};

const mapStateToProps = (state) => ({
    posts: state.posts
});

const mapDispatchToProps = (dispatch) => ({
    fetchPosts: ()=> dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);