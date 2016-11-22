import React, {Component, PropTypes} from 'react';

export default class Layout extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                { this.props.children }
            </div>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
};
