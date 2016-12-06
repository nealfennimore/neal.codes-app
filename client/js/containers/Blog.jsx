import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { renderChildren } from 'shared/react';
import { fetchPosts } from 'actions/blog/posts';

import { queryParams } from 'shared/blog';
import { Posts } from 'components/blog';
import styles from './Layout.scss';
import blogStyles from './Blog.scss';

class Blog extends Component {
    render() {
        const { blog, params, dispatch, children } = this.props;
        return (
            <div className={`row align-center align-middle ${styles.content} ${blogStyles.blog}`}>
                <main className="column small-12 medium-10">
                    { children ?
                        renderChildren(children, {blog, params, dispatch}) :
                        <Posts
                            blog={blog}
                            fetchPosts={this.props.fetchPosts}
                        />
                    }
                </main>
            </div>
        );
    }
}

Blog.fetchData = ({store}) => store.dispatch(fetchPosts(queryParams));

Blog.propTypes = {
    blog: PropTypes.shape({
        posts: PropTypes.object,
        meta: PropTypes.object
    }),
    children: PropTypes.node,
    fetchPosts: PropTypes.func,
    dispatch: PropTypes.func,
    params: PropTypes.object
};

const mapStateToProps = (state) => ({
    blog: state.blog
});

const mapDispatchToProps = (dispatch) => ({
    dispatch,
    fetchPosts: (args)=> dispatch(fetchPosts(args))
});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);