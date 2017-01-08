import React, { PropTypes } from 'react';
import styles from './Project.scss';

const Project = ({id, title, subtitle, coverImage, onProjectClick}) => {
    return (
        <div className={`column small-12 medium-6 ${styles.project}`}>
            <img src={coverImage.src} srcSet={coverImage.srcSet} onClick={()=>onProjectClick(id)}/>
            <div className={styles.overlay} onClick={()=>onProjectClick(id)}>
                <div className={`row align-middle align-center text-center ${styles.titles}`}>
                    <div className='column small-8'>
                        <h2>{title}</h2>
                        <p>{subtitle}</p>
                        <i className='icon-plus'></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

Project.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.object),
    coverImage: PropTypes.object,
    onProjectClick: PropTypes.func.isRequired
};

export default Project;