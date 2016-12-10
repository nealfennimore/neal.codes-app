import React, { PropTypes } from 'react';
import Project from 'components/projects/Project';

const ProjectsRow = ({row}) => {
    return (
        <div className='row'>
            {row.map((project, i) => <Project key={i} {...project} /> )}
        </div>
    );
};

ProjectsRow.propTypes = {
    row: PropTypes.arrayOf(PropTypes.object)
};

export default ProjectsRow;