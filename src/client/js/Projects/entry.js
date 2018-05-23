import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Main from 'client/js/Global/components/Main';
import Injector from 'client/js/Global/components/Injector';
import { showProjectModal, hideProjectModal } from './actions/projects';
import { getProjects, getModal } from './selectors/projects';
import projectsReducer from './reducers';
import Projects from './components/Projects';
import styles from './Projects.pcss';

export class ProjectEntry extends PureComponent {
    static propTypes = {
    }

    render() {
        return (
            <Main className={styles.Projects}>
                <Projects
                    projects={this.props.projects || []}
                    modal={this.props.modal || {}}
                    hideModal={this.props.hideModal}
                    showModal={this.props.showModal}
                />
            </Main>
        );
    }
}

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

export default enhance( ProjectEntry );
