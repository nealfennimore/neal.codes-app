import React from 'react';
import Loadable from 'react-loadable';
import Loader from 'client/js/Global/components/Loader/ComponentLoader';

const ProjectsLoader = Loadable( {
    loader: () => import( './ProjectsEntry' ),
    loading: Loader,
    delay: 300
} );


const Projects = ()=> <ProjectsLoader />;
export default Projects;
