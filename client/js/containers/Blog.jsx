import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { renderChildren } from 'shared/react';
import { fetchPosts, fetchPostsIfNeeded } from 'actions/blogActions';

import { queryParams } from 'shared/blog';
import { Posts } from 'components/blog';

class Blog extends Component {
    render() {
        const { blog, params, dispatch, children } = this.props;
        return (
            <main>
                { children ?
                    renderChildren(children, {blog, params, dispatch}) :
                    <Posts
                        blog={blog}
                        fetchPosts={this.props.fetchPosts}
                    />
                }
            </main>
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