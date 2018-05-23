import React from 'react';
import PropTypes from 'prop-types';
import styles from './Project.pcss';

const Project = ( { id, title, subtitle, coverImage, onProjectClick } ) => {
    return (
        <button className={styles.project} onClick={()=>onProjectClick( id )}>
            <img src={coverImage} alt={title} />
            <div className={styles.overlay}>
                <div className={styles.titles}>
                    <h2 className="h3">{title}</h2>
                    <p>{subtitle}</p>
                    <i className='icon-plus' />
                </div>
            </div>
        </button>
    );
};

Project.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    coverImage: PropTypes.string.isRequired,
    onProjectClick: PropTypes.func.isRequired
};

export default Project;
