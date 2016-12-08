import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { renderChildren } from 'shared/react';
import { fetchPosts as fetchPostsAction, fetchPage } from 'actions/blog/posts';

import { queryParams } from 'shared/blog';
import { Posts } from 'components/blog';
import styles from 'components/global/Content.scss';
import blogStyles from './Blog.scss';

class Blog extends Component {
    render() {
        const { blog, params, dispatch, children, fetchPosts, fetchPage } = this.props;
        return (
            <div className={`row align-center align-middle ${styles.content} ${blogStyles.blog}`}>
                <main className="column small-12 medium-10">
                    { children ?
                        renderChildren(children, {blog, params, dispatch, fetchPosts, fetchPage}) :
                        <Posts
                            blog={blog}
                            fetchPosts={fetchPosts}
                            fetchPage={fetchPage}
                            params={params}
                        />
                    }
                </main>
            </div>
        );
    }
}

Blog.fetchData = ({store}) => store.dispatch(fetchPostsAction(queryParams));

Blog.propTypes = {
    blog: PropTypes.shape({
        posts: PropTypes.object,
        meta: PropTypes.object
    }),
    children: PropTypes.node,
    fetchPosts: PropTypes.func,
    fetchPage: PropTypes.func,
    dispatch: PropTypes.func,
    params: PropTypes.object
};

const mapStateToProps = (state) => ({
    blog: state.blog
});

const mapDispatchToProps = (dispatch) => ({
    dispatch,
    fetchPosts: (args)=> dispatch(fetchPostsAction(args)),
    fetchPage: (page)=> dispatch(fetchPage(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);