import React, { PropTypes } from 'react';
import chunk from 'lodash/chunk';

import ProjectsRow from 'components/projects/ProjectsRow';

const ProjectList = ({projects, onProjectClick}) => {
    const rows = chunk(projects, 2);

    return (
        <div>
            {rows.map((row, i) => <ProjectsRow key={i} row={row} onProjectClick={onProjectClick} />)}
        </div>
    );
};

ProjectList.propTypes = {
    onProjectClick: PropTypes.func.isRequired,
    projects: PropTypes.array
};

export default ProjectList;