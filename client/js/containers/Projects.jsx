import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';
import ProjectList from 'components/projects';

import styles from 'components/global/Content.scss';

export default class Projects extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={`${styles.content} row align-middle align-center`}>
                <div className='column small-10'>
                    <ProjectList />
                </div>
            </div>
        );
    }
}

Projects.propTypes = {

};
