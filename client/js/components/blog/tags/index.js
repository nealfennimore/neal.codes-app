import React, {Component, PropTypes} from 'react';
import has from 'lodash/has';
import get from 'lodash/get';
import isEqual from 'lodash/isEqual';

import { fetchTags, fetchTagsIfNeeded } from 'actions/blog/tags';
import TagSEO from './TagSEO';
import Posts from 'components/blog/common/Posts';
import Pagination from 'components/blog/common/Pagination';
import Loader from 'components/global/Loader';
import { capitializeWords } from 'shared/formatting';

export default class Tags extends Component {
    componentDidMount(){
        const { dispatch } = this.props;
        dispatch(fetchTagsIfNeeded(this.props));
    }

    componentWillReceiveProps(nextProps){
        if(!isEqual(this.props.params, nextProps.params)){
            const { dispatch } = nextProps;
            dispatch(fetchTagsIfNeeded(nextProps));
        }
    }

    getTags(){
        const { blog: {tags}, params: {slug} } = this.props;
        return get(tags, slug, {posts:{}, meta:{}});
    }

    hasTags(){
        const { blog: {tags}, params: {slug} } = this.props;
        return has(tags, slug);
    }

    render() {
        const {
            blog: { tags },
            params: {slug}
        } = this.props;

        if( tags.isFetching || !this.hasTags() ){
            return <Loader />;
        }

        const { posts, meta } = this.getTags();
        const pagination = get(meta, 'pagination', {});

        return (
            <div>
                <TagSEO tags={tags} slug={slug} />
                <div className='row align-middle'>
                    <h1 className='column h2'>{capitializeWords(slug.replace(/-/g, ' '))}</h1>
                    <h2 className='column shrink h3'><small>{pagination.total} {pagination.total === 1 ? 'Post': 'Posts'}</small></h2>
                </div>
                <Posts posts={posts} />
                <Pagination
                    pagination={pagination}
                    prefix={`/blog/tag/${slug}`}
                />
            </div>
        );
    }
}

Tags.fetchData = ({
    store: {dispatch},
    router: {params: {slug, tagPage}}
}) => dispatch(fetchTags(slug, tagPage));

Tags.propTypes = {
    dispatch: PropTypes.func,
    params: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        tagPage: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])
    }),
    blog: PropTypes.shape({
        tags: PropTypes.object
    })
};