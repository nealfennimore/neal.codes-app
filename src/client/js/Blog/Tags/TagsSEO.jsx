import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { TagPropType } from 'client/js/Global/proptypes/tag';

const baseUrl = 'https://neal.codes/blog';

const TagSEO = ( { tag, page } ) => {
    const baseTitle = tag.meta_title || tag.name;
    const title = page == 1 ? baseTitle : `${baseTitle} | Page ${page}`;
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

TagSEO.defaultProps = {
    page: 1,
    tag: {}
};

TagSEO.propTypes = {
    tag: TagPropType,
    page: PropTypes.number,
};

export default TagSEO;
