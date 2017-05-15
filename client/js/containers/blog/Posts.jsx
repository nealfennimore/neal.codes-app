import { connect } from 'react-redux';

import { POSTS } from 'sagas/blog/posts';
import Posts from 'components/blog/posts';

const mapStateToProps = (state) => ({
    blog: state.blog
});

const mapDispatchToProps = (dispatch) => ({
    dispatch,
    getPosts: (props)=> dispatch({
        type: POSTS,
        ...props
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);