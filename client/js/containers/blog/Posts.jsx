import { connect } from 'react-redux';

import { POSTS, postsFlow } from 'sagas/blog/posts';
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

Posts.preload = function preload(args){
    return [
        [postsFlow, args]
    ];
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);