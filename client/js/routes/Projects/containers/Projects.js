import { connect } from 'react-redux';
import { showProjectModal, hideProjectModal } from 'sagas/projects';
import { injectReducer, syncReducer } from 'sagas/injector';
import projectsReducer from '../reducers';
import Projects from '../components/Projects';

const projects = {
    key: 'projects',
    reducer: projectsReducer
};

Projects.preload = function preload(args){
    return [
        [injectReducer, projects, args]
    ];
};

export default connect(
    (state) => {
        const _projects = state.projects && state.projects.projects;
        const modal = state.projects && state.projects.modal;

        return {
            projects: _projects || [],
            modal: modal || {},
            hasProjects: _projects && modal
        };
    },
    (dispatch) => ({
        setup: ()=> dispatch( syncReducer(projects) ),
        showModal: (id)=> dispatch(showProjectModal(id)),
        hideModal: ()=> dispatch(hideProjectModal())
    })
)(Projects);
