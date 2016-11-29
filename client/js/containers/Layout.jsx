import React, {Component, PropTypes} from 'react';
import Navigation from 'components/global/Navigation';

export default class Layout extends Component {
    render() {
        return (
            <div>
                <Navigation />
                { this.props.children }
            </div>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
};
