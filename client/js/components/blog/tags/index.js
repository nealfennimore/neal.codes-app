import React, {Component, PropTypes} from 'react';
import has from 'lodash/has';
import get from 'lodash/get';

import { fetchTags, fetchTagsIfNeeded } from 'actions/blog/tags';
import Posts from 'components/blog/common/Posts';
import Pagination from 'components/blog/common/Pagination';
import Loader from 'components/global/Loader';

export default class Tag extends Component {
    componentDidMount(){
        const { dispatch } = this.props;
        dispatch(fetchTagsIfNeeded(this.props));
    }

    hasTags(){
        const { blog: {tags}, params: {slug} } = this.props;
        return has(tags, slug);
    }

    getTags(){
        const { blog: {tags}, params: {slug} } = this.props;
        return get(tags, slug, {posts:{}, meta:{}});
    }

    render() {
        const {
            blog: { tags: {isFetching} },
            params: {slug},
            dispatch
        } = this.props;

        if(isFetching || !this.hasTags() ){
            return <Loader />;
        }

        const {posts, meta} = this.getTags();
        const {pagination={}} = meta;

        return (
            <div>
                <Posts posts={posts} />
                <Pagination
                    pagination={pagination}
                    onClick={(page)=>dispatch(fetchTags(slug, page))}
                />
            </div>
        );
    }
}

Tag.fetchData = ({
    store: {dispatch},
    router: {params: {slug}}
}) => dispatch(fetchTags(slug));

Tag.propTypes = {
    dispatch: PropTypes.func,
    params: PropTypes.shape({
        slug: PropTypes.string.isRequired
    }),
    blog: PropTypes.shape({
        tags: PropTypes.object
    })
};