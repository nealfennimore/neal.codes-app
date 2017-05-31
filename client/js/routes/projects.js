import React, {Component} from 'react';
import Bundle from 'components/common/Bundle';

const loadProjects = () => import(/* webpackChunkName: "projects" */ 'containers/Projects');

class Projects extends Component {
    render() {
        return <Bundle load={loadProjects} />;
    }
}

export default Projects;
