import React, {Component, PropTypes} from 'react';
import Navigation from 'components/global/Navigation';

import styles from './Layout.scss';

export default class Layout extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Navigation />
                { this.props.children }
                <footer className="row">
                    <div className="column expanded">
                        Hi
                    </div>
                </footer>
            </div>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
};
