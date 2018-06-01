import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectModal.pcss';
import ProjectModalGallery from './ProjectModalGallery';

const ProjectModal = ( { onHide, project } ) => {
    return (
        <div className={styles.modal}>
            <button className={styles.closeButton} onClick={onHide}>
                <i className='icon-close' />
            </button>
            <ProjectModalGallery project={project} />
        </div>
    );
};

ProjectModal.propTypes = {
    onHide: PropTypes.func.isRequired,
    project: PropTypes.shape( {} ).isRequired
};

export default ProjectModal;
