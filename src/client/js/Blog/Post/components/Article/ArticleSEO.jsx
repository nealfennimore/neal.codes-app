import React from 'react';
import { Helmet } from 'react-helmet';
import { truncate } from 'lodash';
import * as selectors from 'client/js/Global/selectors/post';
import { PostPropType } from 'client/js/Global/proptypes/post';

const baseUrl = 'https://neal.codes/blog/';

const ArticleSEO = ( { post } ) => {
    const baseDescription = selectors.getMetaDescription( post ) || selectors.getPlainText( post );
    const baseTitle = selectors.getMetaTitle( post ) || selectors.getTitle( post );

    const title = baseTitle;
    const description = truncate( baseDescription, 160 );
    const url   = `${baseUrl}${selectors.getURL( post )}`;
    const published = selectors.getPublishedAt( post );
    const updated = selectors.getUpdatedAt( post );

    const tags = selectors.getTags( post );

    return (
        <Helmet>
            <title>{title}</title>
            <link rel="canonical" href={url} />

            <meta name="description" content={description} />
            <meta name="referrer" content="origin" />

            <meta property="og:type" content="article" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:url" content={url} />

            <meta property="article:published_time" content={published} />
            <meta property="article:modified_time" content={updated} />

            {tags.map(
                tag => <meta key={tag.id} property="article:tag" content={tag.name} />
            )}
        </Helmet>
    );
};

ArticleSEO.propTypes = {
    post: PostPropType
};

export default ArticleSEO;
