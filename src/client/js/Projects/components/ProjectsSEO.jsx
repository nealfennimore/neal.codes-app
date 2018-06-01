import React, { PropTypes } from 'react';
import { Helmet } from 'react-helmet';

const title = 'Projects - neal.codes';
const description = 'Projects I\'ve worked on';
const url   = 'https://neal.codes/projects';

const ProjectsSEO = ( props ) => {
    return (
        <Helmet>
            <title>Projects</title>

            <meta name="description" content={description} />
            <link rel="canonical" href={url} />
            <meta name="referrer" content="origin" />

            <meta property="og:site_name" content="neal.codes" />
            <meta property="og:type" content="website" />
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

ProjectsSEO.propTypes = {

};

export default ProjectsSEO;
