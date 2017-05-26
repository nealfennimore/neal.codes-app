import { connect } from 'react-redux';

import { GET_TAGS, tagsFlow } from 'sagas/blog/tags';
import Tags from 'components/blog/tags';

const mapStateToProps = (state) => ({
    blog: state.blog
});

const mapDispatchToProps = (dispatch) => ({
    getTags: ({ blog, params })=> dispatch({
        type: GET_TAGS,
        blog,
        params
    })
});

Tags.preload = function preload(args){
    return [
        [tagsFlow, args]
    ];
};

export default connect(mapStateToProps, mapDispatchToProps)(Tags);