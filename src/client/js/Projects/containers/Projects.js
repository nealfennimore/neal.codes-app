import { compose } from 'redux';
import { connect } from 'react-redux';
import Injector from 'client/js/Global/components/Injector';
import { showProjectModal, hideProjectModal } from '../actions/projects';
import { getProjects, getModal } from '../selectors/projects';
import projectsReducer from '../reducers';
import Projects from '../components/Projects';

const injector = Injector( {
    reducers: {
        projects: projectsReducer
    }
} );

const connector =  connect(
    ( state ) => ( {
        projects: getProjects( state ),
        modal: getModal( state )
    } ),
    ( dispatch ) => ( {
        showModal: ( id )=> dispatch( showProjectModal( id ) ),
        hideModal: ()=> dispatch( hideProjectModal() )
    } )
);

const enhance = compose(
    connector,
    injector
);

export default enhance( Projects );
