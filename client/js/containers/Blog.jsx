import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { renderChildren } from 'shared/react';
import { fetchPosts } from 'actions/blogActions';

import PostsPage from 'components/blog/posts';

const queryParams = {
    queryParams: {
        limit: 1
    }
};

class Blog extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        const { blog: {posts=[]} } = this.props;
        if(!posts.length){ this.props.fetchPosts(queryParams); }
    }

    render() {
        const { blog, params, dispatch, children } = this.props;
        return (
            <div>
                { children ?
                    renderChildren(children, {blog, params, dispatch}) :
                    <PostsPage
                        blog={blog}
                        fetchPosts={this.props.fetchPosts}
                        queryParams={queryParams}
                    />
                }
            </div>
        );
    }
}

Blog.fetchData = ({store}) => store.dispatch(fetchPosts(queryParams));

Blog.propTypes = {
    blog: PropTypes.shape({
        posts: PropTypes.arrayOf(React.PropTypes.object),
        meta: PropTypes.object
    }),
    children: PropTypes.node
};

const mapStateToProps = (state) => ({
    blog: state.blog
});

const mapDispatchToProps = (dispatch) => ({
    dispatch,
    fetchPosts: (args)=> dispatch(fetchPosts(args))
});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);