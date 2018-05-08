import React from 'react';
import Bundle from 'components/common/Bundle';

const loadProjects = () => import(/* webpackChunkName: "projects" */ './entry');
const Projects = (props) => {
    return <Bundle load={loadProjects} {...props} />;
};

Projects.propTypes = {

};

export default Projects;
