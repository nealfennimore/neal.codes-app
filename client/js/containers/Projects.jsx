import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';

import { showProjectModal, hideProjectModal } from 'actions/projects';
import ProjectList from 'components/projects';
import ProjectModal from 'components/projects/ProjectModal';
import styles from './Projects.scss';

class Projects extends Component {
    render() {
        const {
            projects: {projects, modal},
            showProjectModal:showModal,
            hideProjectModal:hideModal
         } = this.props;

        return (
            <div className={`${styles.projects} row align-middle align-center`}>
                <div className='column small-8 large-7'>
                    <ProjectList projects={projects} onProjectClick={(id)=>showModal(id)} />
                </div>

                { modal.isActive ? <ProjectModal project={projects[modal.activeID]} onHide={()=>hideModal()} /> : null}
            </div>
        );
    }
}

Projects.propTypes = {
    dispatch: PropTypes.func,
    showProjectModal: PropTypes.func,
    hideProjectModal: PropTypes.func,
    projects: PropTypes.shape({
        projects: PropTypes.array,
        modal: PropTypes.object
    })
};

const mapStateToProps = (state) => ({
    projects: state.projects
});

const mapDispatchToProps = (dispatch) => ({
    dispatch,
    showProjectModal: (id)=> dispatch(showProjectModal(id)),
    hideProjectModal: ()=> dispatch(hideProjectModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);