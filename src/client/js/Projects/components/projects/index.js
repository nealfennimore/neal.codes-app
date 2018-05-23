import React from 'react';
import PropTypes from 'prop-types';
import chunk from 'lodash/chunk';

import ProjectsRow from './ProjectsRow';

const ProjectList = ( { projects, onProjectClick } ) => {
    const rows = chunk( projects, 2 );

    return (
        <section>
            {
                rows.map( ( row, i ) => <ProjectsRow key={i} row={row} onProjectClick={onProjectClick} /> )
            }
        </section>
    );
};

ProjectList.propTypes = {
    onProjectClick: PropTypes.func.isRequired,
    projects: PropTypes.arrayOf( PropTypes.object ).isRequired
};

export default ProjectList;
