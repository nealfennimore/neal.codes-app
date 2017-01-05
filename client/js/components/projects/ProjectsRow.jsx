import React, { PropTypes } from 'react';
import Project from 'components/projects/Project';

const ProjectsRow = ({row, onProjectClick}) => {
    return (
        <div className='row'>
            {row.map((project, i) => <Project key={i} {...project} onProjectClick={onProjectClick} /> )}
        </div>
    );
};

ProjectsRow.propTypes = {
    onProjectClick: PropTypes.func.isRequired,
    row: PropTypes.arrayOf(PropTypes.object)
};

export default ProjectsRow;