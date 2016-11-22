import React, {Component, PropTypes} from 'react';

import Counter from 'components/Counter';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Counter />
            </div>
        );
    }
}

Home.propTypes = {

};
