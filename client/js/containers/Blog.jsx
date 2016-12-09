import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { renderChildren } from 'shared/react';
import { fetchPage as fetchPageAction } from 'actions/blog/posts';

import { Posts } from 'components/blog';
import styles from 'components/global/Content.scss';
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
                            params={params}
                            dispatch={dispatch}
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
        post: PropTypes.object,
        tags: PropTypes.object
    }),
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
    }),
    dispatch: PropTypes.func,
    children: PropTypes.node
};

const mapStateToProps = (state) => ({
    blog: state.blog
});

const mapDispatchToProps = (dispatch) => ({
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);