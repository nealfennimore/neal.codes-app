import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { renderChildren } from 'shared/react';

import BlogSEO from './BlogSEO';
import styles from './Blog.scss';

const Blog = ({ children, blog }) => {
    return (
        <div className={`row align-center align-middle ${styles.blog}`}>
            <BlogSEO blog={blog} />
            <main className="column small-11 medium-10 large-9">
                {
                    renderChildren(children)
                }
            </main>
        </div>
    );
};

Blog.propTypes = {
    children: PropTypes.node.isRequired,
    blog: PropTypes.shape({}).isRequired
};

const mapStateToProps = (state) => ({
    blog: state.blog
});

export default connect(mapStateToProps)(Blog);