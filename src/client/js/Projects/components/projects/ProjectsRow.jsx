import React from 'react';
import PropTypes from 'prop-types';
import Project from './Project';
import styles from './ProjectsRow.pcss';

const ProjectsRow = ( { row, onProjectClick } ) => {
    return (
        <div className={styles.row}>
            {row.map( ( project, i ) => <Project key={i} {...project} onProjectClick={onProjectClick} /> )}
        </div>
    );
};

ProjectsRow.propTypes = {
    onProjectClick: PropTypes.func.isRequired,
    row: PropTypes.arrayOf( PropTypes.object ).isRequired
};

export default ProjectsRow;
