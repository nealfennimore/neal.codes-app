import React, { PropTypes } from 'react';
import chunk from 'lodash/chunk';

import ProjectsRow from 'components/projects/ProjectsRow';

const ProjectList = ({projects}) => {
    const rows = chunk(projects, 2);

    return (
        <div>
            {rows.map((row, i) => <ProjectsRow key={i} row={row} />)}
        </div>
    );
};

ProjectList.propTypes = {
    projects: PropTypes.array
};

export default ProjectList;