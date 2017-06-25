import React, {PropTypes} from 'react';

import ProjectList from './projects';
import ProjectModal from './projects/ProjectModal';

import ProjectsSEO from './ProjectsSEO';
import styles from './Projects.scss';

const Projects = ({
    projects: {projects, modal},
    showProjectModal:showModal,
    hideProjectModal:hideModal
}) => {
    return (
        <div className={`${styles.projects} row align-middle align-center`}>
            <ProjectsSEO />
            <div className='column small-8 large-7'>
                <ProjectList projects={projects} onProjectClick={(id)=>showModal(id)} />
            </div>

            { modal.isActive ? <ProjectModal project={projects[modal.activeID]} onHide={()=>hideModal()} /> : null}
        </div>
    );
};

Projects.propTypes = {
    showProjectModal: PropTypes.func.isRequired,
    hideProjectModal: PropTypes.func.isRequired,
    projects: PropTypes.shape({
        projects: PropTypes.array,
        modal: PropTypes.object
    }).isRequired
};

export default Projects;
