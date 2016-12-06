import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';

import Counter from 'components/Counter';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Counter />
                <Link to={'/blog/somewhere'}>Somewhere</Link>
                <h1>Hi</h1>
                <h2>Hi</h2>
                <h3>Hi</h3>
                <h4>Hi</h4>
                <h5>Hi</h5>
                <h6>Hi</h6>
            </div>
        );
    }
}

Home.propTypes = {

};
