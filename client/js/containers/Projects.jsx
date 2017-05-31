import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';

import store from 'client/store';
import { showProjectModal, hideProjectModal } from 'sagas/projects';
import ProjectsSEO from './ProjectsSEO';
import ProjectList from 'components/projects';
import ProjectModal from 'components/projects/ProjectModal';
import projects from 'reducers/projects';
import styles from './Projects.scss';

store.instance.injectAsyncReducers({
    projects
});

class Projects extends Component {
    render() {
        const {
            projects: {projects, modal},
            showProjectModal:showModal,
            hideProjectModal:hideModal
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
    showProjectModal: PropTypes.func.isRequired,
    hideProjectModal: PropTypes.func.isRequired,
    projects: PropTypes.shape({
        projects: PropTypes.array,
        modal: PropTypes.object
    }).isRequired
};

const mapStateToProps = (state) => ({
    projects: state.projects
});

const mapDispatchToProps = (dispatch) => ({
    showProjectModal: (id)=> dispatch(showProjectModal(id)),
    hideProjectModal: ()=> dispatch(hideProjectModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
