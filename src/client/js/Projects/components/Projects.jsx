import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ProjectList from './projects';
import ProjectModal from './projects/ProjectModal';
import ProjectsSEO from './ProjectsSEO';

export const Projects = ( {
    projects,
    showModal,
    hideModal,
    modal,
} ) =>{
    return (
        <Fragment>
            <ProjectsSEO />
            <ProjectList projects={projects} onProjectClick={( id )=>showModal( id )} />

            { modal.isActive ? <ProjectModal project={projects[modal.activeID]} onHide={()=>hideModal()} /> : null}
        </Fragment>
    );
};

Projects.propTypes = {
    showModal: PropTypes.func.isRequired,
    hideModal: PropTypes.func.isRequired,
    projects: PropTypes.arrayOf( PropTypes.object ).isRequired,
    modal: PropTypes.shape( {} ).isRequired
};

export default Projects;
