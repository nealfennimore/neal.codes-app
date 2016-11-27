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
            </div>
        );
    }
}

Home.propTypes = {

};
