import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import styles from 'styles/main.scss';

const NOOP = Function.prototype;

class Counter extends Component {
    constructor(props) {
        super(props);
        this.incrementAsync = this.incrementAsync.bind(this);
        this.incrementIfOdd = this.incrementIfOdd.bind(this);
    }

    incrementIfOdd() {
        if (this.props.value % 2 !== 0) {
            this.props.onIncrement();
        }
    }

    incrementAsync() {
        setTimeout(this.props.onIncrement, 1000);
    }

    render() {
        const { value=0, onIncrement=NOOP, onDecrement=NOOP } = this.props;
        return (
            <p className={styles.greeting}>
                <Link to={'/blog'}><button>Blog</button></Link>
                Clicked: {value} times
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
                <button onClick={this.incrementIfOdd}>Increment if odd</button>
                <button onClick={this.incrementAsync}>Increment async</button>
            </p>
        );
    }
}

Counter.propTypes = {
    value: PropTypes.number,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func
};

export default Counter;