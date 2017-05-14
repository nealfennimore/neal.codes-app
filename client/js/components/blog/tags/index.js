import React, {Component, PropTypes} from 'react';
import has from 'lodash/has';
import get from 'lodash/get';
import isEqual from 'lodash/isEqual';

import { REQUEST_TAGS } from 'sagas/blog/tags';
import TagSEO from './TagSEO';
import Posts from 'components/blog/common/Posts';
import Pagination from 'components/blog/common/Pagination';
import Loader from 'components/global/Loader';
import { capitializeWords } from 'shared/formatting';

export default class Tags extends Component {
    componentWillMount(){
        this.fetchTagsIfNeeded();
    }

    componentDidMount(){
        this.fetchTagsIfNeeded();
    }

    componentWillReceiveProps(nextProps){
        if(!isEqual(this.props.params, nextProps.params)){
            this.fetchTagsIfNeeded();
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

    fetchTagsIfNeeded(){
        const { dispatch, blog, params: {slug, tagPage=1} } = this.props;
        const posts = get(blog, `tags.${slug}`, false);
        const page  = get(posts, 'meta.pagination.page');

        if( !(posts && page == tagPage) ){
            dispatch({
                type: REQUEST_TAGS,
                page: tagPage,
                slug
            });
        }
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

Tags.propTypes = {
    dispatch: PropTypes.func.isRequired,
    params: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        tagPage: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])
    }).isRequired,
    blog: PropTypes.shape({
        tags: PropTypes.object
    }).isRequired
};