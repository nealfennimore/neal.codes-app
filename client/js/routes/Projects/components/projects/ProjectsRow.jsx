import React, { PropTypes } from 'react';
import Project from './Project';
import styles from './ProjectsRow.scss';

const ProjectsRow = ({row, onProjectClick}) => {
    return (
        <div className={`${styles.row} row`}>
            {row.map((project, i) => <Project key={i} {...project} onProjectClick={onProjectClick} /> )}
        </div>
    );
};

ProjectsRow.propTypes = {
    onProjectClick: PropTypes.func.isRequired,
    row: PropTypes.arrayOf(PropTypes.object)
};

export default ProjectsRow;
