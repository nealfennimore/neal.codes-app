import React, { PropTypes } from 'react';
import { Helmet } from 'react-helmet';
import get from 'lodash/get';
import { cleanMarkdown, truncate } from 'shared/formatting';

const baseUrl = 'https://neal.codes/blog/';

const ArticleSEO = ({post={}}) => {
    const baseDescription = post.meta_description || post.markdown;
    const baseTitle       = post.meta_title || post.title;

    const title = baseTitle;
    const description = truncate(cleanMarkdown(baseDescription || ''), 160);
    const url   = `${baseUrl}${get(post, 'url', '')}`;
    const created = get(post, 'created_at', '');
    const updated = get(post, 'updated_at', '');

    const tags = get(post, 'tags', []);

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

            <meta property="article:published_time" content={created} />
            <meta property="article:modified_time" content={updated} />

            {tags.map(
                (tag, i) => <meta key={i} property="article:tag" content={tag.name} />
            )}
        </Helmet>
    );
};

ArticleSEO.propTypes = {
    post: PropTypes.object
};

export default ArticleSEO;