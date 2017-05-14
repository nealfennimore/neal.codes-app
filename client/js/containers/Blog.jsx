import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { renderChildren } from 'shared/react';

import BlogSEO from './BlogSEO';
import { Posts } from 'components/blog';
import styles from './Blog.scss';

class Blog extends Component {
    render() {
        const { blog, params, dispatch, children } = this.props;
        return (
            <div className={`row align-center align-middle ${styles.blog}`}>
                <BlogSEO blog={blog} />
                <main className="column small-11 medium-10 large-9">
                    { children ?
                        renderChildren(children, {blog, params, dispatch}) :
                        <Posts
                            blog={blog}
                            params={params}
                            dispatch={dispatch}
                        />
                    }
                </main>
            </div>
        );
    }
}

Blog.propTypes = {
    blog: PropTypes.shape({
        posts: PropTypes.object,
        post: PropTypes.object,
        tags: PropTypes.object
    }).isRequired,
    params: PropTypes.shape({
        page: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        tagPage: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        slug: PropTypes.string
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
    children: PropTypes.node
};

const mapStateToProps = (state) => ({
    blog: state.blog
});

const mapDispatchToProps = (dispatch) => ({
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);