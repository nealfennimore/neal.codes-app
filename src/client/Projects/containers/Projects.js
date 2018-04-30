import { connect } from 'react-redux';
import { injectReducer, syncReducer } from 'sagas/injector';
import { showProjectModal, hideProjectModal } from '../sagas/projects';
import { getProjects, getModal } from '../selectors/projects';
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
    (state) => ({
        projects: getProjects(state),
        modal: getModal(state)
    }),
    (dispatch) => ({
        setup: ()=> dispatch( syncReducer(projects) ),
        showModal: (id)=> dispatch(showProjectModal(id)),
        hideModal: ()=> dispatch(hideProjectModal())
    })
)(Projects);
