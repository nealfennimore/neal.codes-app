import { connect } from 'react-redux';
import { GET_POST } from 'sagas/blog/post';
import Post from 'components/blog/post';

const mapStateToProps = (state) => ({
    blog: state.blog
});

const mapDispatchToProps = (dispatch) => ({
    getPost: ({blog, params: {slug}})=> dispatch({
        type: GET_POST,
        blog,
        slug
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);