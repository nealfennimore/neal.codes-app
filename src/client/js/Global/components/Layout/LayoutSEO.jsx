import React from 'react';
import { Helmet } from 'react-helmet';

const defaultTitle = 'Neal Fennimore | Front End Developer';
const description = 'Neal Fennimore, front end web developer';
const url         = 'https://neal.codes';

const LayoutSEO = () => {
    return (
        <Helmet
            defaultTitle={defaultTitle}
            titleTemplate={`%s | ${defaultTitle}`}
        >
            <link rel="canonical" href={url} />
            <meta name="description" content={description} />

            <meta property="og:site_name" content="neal.codes" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={defaultTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={defaultTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:url" content={url} />
        </Helmet>
    );
};

LayoutSEO.propTypes = {

};

export default LayoutSEO;
