import React, { PropTypes } from 'react';
import { Helmet } from 'react-helmet';
import get from 'lodash/get';

const title              = 'Neal Fennimore | Front End Developer';
const defaultDescription = 'Front end web development blog';
const url                = 'https://neal.codes/blog';

const BlogSEO = ({blog}) => {
    const page        = get(blog, 'posts.meta.pagination.page', 1);
    const description = page == 1 ? defaultDescription : `${defaultDescription} | Page ${page}` ;

    return (
        <Helmet>
            <title>{description}</title>
            <link rel="canonical" href={url} />

            <meta name="description" content={description} />

            <meta property="og:type" content="article" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:url" content={url} />
        </Helmet>
    );
};

BlogSEO.propTypes = {
    blog: PropTypes.object
};

export default BlogSEO;