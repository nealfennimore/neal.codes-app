import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { renderChildren } from 'shared/react';
import { fetchPosts as fetchPostsAction, fetchPage as fetchPageAction } from 'actions/blog/posts';

import { Posts } from 'components/blog';
import styles from 'components/global/Content.scss';
import blogStyles from './Blog.scss';

class Blog extends Component {
    render() {
        const { blog, params, location, dispatch, children, fetchPosts, fetchPage, routing } = this.props;
        return (
            <div className={`row align-center align-middle ${styles.content} ${blogStyles.blog}`}>
                <main className="column small-12 medium-10">
                    { children ?
                        renderChildren(children, {blog, params, location, dispatch, fetchPosts, fetchPage, routing}) :
                        <Posts
                            blog={blog}
                            location={location}
                            fetchPage={fetchPage}
                        />
                    }
                </main>
            </div>
        );
    }
}

Blog.fetchData = ({store}) => store.dispatch(fetchPageAction(1));

Blog.propTypes = {
    blog: PropTypes.shape({
        posts: PropTypes.object,
        meta: PropTypes.object
    }),
    children: PropTypes.node,
    fetchPosts: PropTypes.func,
    fetchPage: PropTypes.func,
    dispatch: PropTypes.func,
    params: PropTypes.object,
    location: PropTypes.object,
    routing: PropTypes.object
};

const mapStateToProps = (state) => ({
    blog: state.blog,
    routing: state.routing
});

const mapDispatchToProps = (dispatch) => ({
    dispatch,
    fetchPosts: (args)=> dispatch(fetchPostsAction(args)),
    fetchPage: (page)=> dispatch(fetchPageAction(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);