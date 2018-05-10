import PropTypes from 'prop-types';
import { TagsPropType, TagPropType } from './tag';
import { MetaPropType } from './meta';

export const PostPropType = PropTypes.shape( {
    amp: PropTypes.string,
    author: PropTypes.string,
    codeinjection_foot: PropTypes.string,
    codeinjection_head: PropTypes.string,
    comment_id: PropTypes.string,
    created_at: PropTypes.string,
    created_by: PropTypes.string,
    custom_excerpt: PropTypes.string,
    custom_template: PropTypes.string,
    feature_image: PropTypes.string,
    featured: PropTypes.bool,
    html: PropTypes.string,
    id: PropTypes.string,
    locale: PropTypes.string,
    meta_description: PropTypes.string,
    meta_title: PropTypes.string,
    mobiledoc: PropTypes.string,
    og_description: PropTypes.string,
    og_image: PropTypes.string,
    og_title: PropTypes.string,
    page: PropTypes.bool,
    plaintext: PropTypes.string,
    primary_author: PropTypes.string,
    primary_tag: TagPropType,
    published_at: PropTypes.string,
    published_by: PropTypes.string,
    slug: PropTypes.string,
    status: PropTypes.string,
    tags: TagsPropType,
    title: PropTypes.string,
    twitter_description: PropTypes.string,
    twitter_image: PropTypes.string,
    twitter_title: PropTypes.string,
    updated_at: PropTypes.string,
    updated_by: PropTypes.string,
    url: PropTypes.string,
    uuid: PropTypes.string,
    visibility: PropTypes.string,
} );

export const PostsPropType = PropTypes.arrayOf( PostPropType );

export const PostsApiPropType = {
    posts: PostsPropType,
    meta: MetaPropType
};
