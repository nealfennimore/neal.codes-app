import React, { PropTypes } from 'react';

const Project = ({title, subtitle}) => {
    return (
        <div className='column'>
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </div>
    );
};

Project.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
};

export default Project;