import React from 'react';
import Bundle from 'components/common/Bundle';

const loadProjects = () => import(/* webpackChunkName: "projects" */ './containers/Projects');
const Projects = ()=> <Bundle load={loadProjects} />;

export default Projects;
