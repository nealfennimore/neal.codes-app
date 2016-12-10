import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';

import ProjectList from 'components/projects';
import styles from 'components/global/Content.scss';

class Projects extends Component {
    render() {
        const { projects } = this.props;

        return (
            <div className={`${styles.content} row align-middle align-center`}>
                <div className='column small-10'>
                    <ProjectList projects={projects} />
                </div>
            </div>
        );
    }
}

Projects.propTypes = {
    dispatch: PropTypes.func,
    projects: PropTypes.array
};

const mapStateToProps = (state) => ({
    projects: state.projects
});

const mapDispatchToProps = (dispatch) => ({
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);