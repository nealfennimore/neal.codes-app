import React, { PropTypes } from 'react';
import styles from './Project.scss';

const Project = ({title, subtitle, coverImage}) => {
    return (
        <div className={`column small-12 medium-6 ${styles.project}`}>
            <img src={coverImage.src} srcSet={coverImage.srcSet} />
            <div className={styles.overlay}>
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </div>
        </div>
    );
};

Project.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.object)
};

export default Project;