import React from 'react';
import AsyncBundle from 'client/js/Global/components/AsyncBundle';

const ProjectsLoader = AsyncBundle(  import( './ProjectsEntry' ) );
const Projects = ()=> <ProjectsLoader />;
export default Projects;
