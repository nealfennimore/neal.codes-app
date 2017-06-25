import { connect } from 'react-redux';

import store from 'client/store';
import { showProjectModal, hideProjectModal } from 'sagas/projects';
import projects from '../reducers';
import Projects from '../components/Projects';

store.instance.injectAsyncReducers({
    projects
});

export default connect(
    (state) => ({
        projects: state.projects
    }),
    (dispatch) => ({
        showProjectModal: (id)=> dispatch(showProjectModal(id)),
        hideProjectModal: ()=> dispatch(hideProjectModal())
    })
)(Projects);
