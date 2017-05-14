import React, {Component, PropTypes} from 'react';
import has from 'lodash/has';
import get from 'lodash/get';
import isEqual from 'lodash/isEqual';

import { GET_TAGS } from 'sagas/blog/tags';
import { isServer } from 'shared/env';
import TagSEO from './TagSEO';
import Posts from 'components/blog/common/Posts';
import Pagination from 'components/blog/common/Pagination';
import Loader from 'components/global/Loader';
import { capitializeWords } from 'shared/formatting';

export default class Tags extends Component {
    componentWillMount(){
        if(isServer){
            this.fetchTags();
        }
    }

    componentDidMount(){
        this.fetchTags();
    }

    componentWillReceiveProps(nextProps){
        if(!isEqual(this.props.params, nextProps.params)){
            this.fetchTags(nextProps);
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

    fetchTags(props){
        const { dispatch, blog, params } = props || this.props;
        dispatch({
            type: GET_TAGS,
            blog,
            params
        });
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