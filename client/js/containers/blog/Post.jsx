import { connect } from 'react-redux';
import { GET_POST, postFlow } from 'sagas/blog/post';
import Post from 'components/blog/post';

const mapStateToProps = (state) => ({
    blog: state.blog
});

const mapDispatchToProps = (dispatch) => ({
    getPost: ({blog, params})=> dispatch({
        type: GET_POST,
        blog,
        params
    })
});

Post.preload = function preload(args){
    return [
        [postFlow, args]
    ];
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);