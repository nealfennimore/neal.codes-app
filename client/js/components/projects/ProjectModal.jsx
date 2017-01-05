import React, { PropTypes } from 'react';
import styles from './ProjectModal.scss';
import ProjectModalGallery from './ProjectModalGallery';

const ProjectModal = ({onHide, project}) => {
    return (
        <div className={styles.modal}>
            <button onClick={onHide}>Hide</button>
            <ProjectModalGallery project={project} />
        </div>
    );
};

ProjectModal.propTypes = {
    onHide: PropTypes.func.isRequired,
    project: PropTypes.object.isRequired
};

export default ProjectModal;