import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';

import styles from './Layout.scss';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={`${styles.content} row align-middle align-center`}>
                <div className='column small-10'>
                    <h1>Neal Fennimore</h1>
                    <h2 className='subheader'>Front End Developer</h2>
                    <p>I'm a full-stack web developer specializing in design and front-end engineering. I'm a polyglot programmer versed in Javascript, Ruby, PHP, and HTML/CSS. I have experience building with front-end frameworks Backbone and React, building single-page applications, and creating data visualization in D3 and CSS3.</p>
                </div>
            </div>
        );
    }
}

Home.propTypes = {

};
