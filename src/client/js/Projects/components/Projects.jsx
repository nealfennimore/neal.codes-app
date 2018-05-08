import React, {PropTypes, Component} from 'react';

import ProjectList from './projects';
import ProjectModal from './projects/ProjectModal';
import ProjectsSEO from './ProjectsSEO';
import styles from './Projects.scss';

export default class Projects extends Component {
    componentDidMount(){
        this.props.setup();
    }

    render() {
        const {
            projects,
            modal,
            showModal,
            hideModal
        } = this.props;

        return (
            <div className={`${styles.projects} row align-middle align-center`}>
                <ProjectsSEO />
                <div className='column small-8 large-7'>
                    <ProjectList projects={projects} onProjectClick={(id)=>showModal(id)} />
                </div>

                { modal.isActive ? <ProjectModal project={projects[modal.activeID]} onHide={()=>hideModal()} /> : null}
            </div>
        );
    }
}

Projects.propTypes = {
    setup: PropTypes.func.isRequired,
    showModal: PropTypes.func.isRequired,
    hideModal: PropTypes.func.isRequired,
    projects: PropTypes.arrayOf(PropTypes.object).isRequired,
    modal: PropTypes.shape({}).isRequired
};
