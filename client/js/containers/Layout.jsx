import React, {Component, PropTypes} from 'react';
import Navigation from 'components/global/Navigation';
import Footer from 'components/global/Footer';

import styles from './Layout.scss';

export default class Layout extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Navigation />
                { this.props.children }
                <Footer />
            </div>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
};
