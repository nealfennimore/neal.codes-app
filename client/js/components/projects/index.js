import React, { PropTypes } from 'react';
import chunk from 'lodash/chunk';

import projectData from './projects';
import Project from './Project';

const projects = chunk(projectData, 2);

const ProjectList = (props) => {
    return (
        <div>
            {projects.map(row => {
                return (
                    <div className='row'>
                        {row.map(project => <Project {...project} /> )}
                    </div>
                );
            })}
        </div>
    );
};

ProjectList.propTypes = {

};

export default ProjectList;