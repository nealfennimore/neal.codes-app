import React, { PropTypes } from 'react';
import styles from './ProjectModal.scss';
import ProjectModalGallery from './ProjectModalGallery';

const ProjectModal = ({onHide, project}) => {
    return (
        <div className={styles.modal}>
            <div className={`row ${styles.close}`}>
                <div className='column'>
                    <button className={styles.closeButton} onClick={onHide}>
                        <i className='icon-close'></i>
                    </button>
                </div>
            </div>
            <ProjectModalGallery project={project} />
        </div>
    );
};

ProjectModal.propTypes = {
    onHide: PropTypes.func.isRequired,
    project: PropTypes.object.isRequired
};

export default ProjectModal;