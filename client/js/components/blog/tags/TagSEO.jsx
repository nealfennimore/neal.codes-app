import React, { PropTypes } from 'react';
import { Helmet } from 'react-helmet';
import get from 'lodash/get';
import first from 'lodash/first';
import find from 'lodash/find';
import { capitializeWords } from 'shared/formatting';

const baseUrl = 'https://neal.codes/blog';

function getTag({slug, tags}){
    const tag  = get(tags, slug, {});
    const page = get(tag, 'meta.pagination.page', 1);
    const post = first(get(tag, 'posts', []));

    if(post){
        return {
            page,
            ...find(post.tags, (t)=> t.slug === slug )
        };
    } else {
        return {
            name:  capitializeWords(slug.replace('-', ' ')),
            page,
            slug
        };
    }
}

const TagSEO = (props) => {
    const tag  = getTag(props);
    const baseTitle = tag.meta_title || tag.name;
    const title = `${baseTitle} | Page ${tag.page}`;
    const url   = `${baseUrl}/tag/${tag.slug}`;
    const description = tag.meta_description || tag.description || baseTitle;

    return (
        <Helmet>
            <title>{title}</title>
            <link rel="canonical" href={url} />

            <meta name="description" content={description} />

            <meta property="og:site_name" content="neal.codes" />
            <meta property="og:type" content="website" />
            <meta property="og:description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:url" content={url} />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:url" content={url} />
        </Helmet>
    );
};

TagSEO.propTypes = {
    tags: PropTypes.object,
    slug: PropTypes.string
};

export default TagSEO;