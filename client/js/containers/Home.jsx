import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';

import styles from './Home.scss';

export default class Home extends Component {
    render() {
        return (
            <div className={`${styles.home} row align-middle align-center`}>
                <div className='column small-10'>

                    <div className={`row ${styles.summary}`}>
                        <div className='column'>
                            <h1>Neal Fennimore</h1>
                            <h2 className='subheader'>Front End Developer</h2>
                            <p>I'm a full-stack web developer specializing in design and front-end engineering. I'm a polyglot programmer versed in Javascript, Ruby, PHP, and HTML/CSS. I have experience building with front-end frameworks Backbone and React, building single-page applications, and creating data visualization in D3 and CSS3.</p>
                        </div>
                    </div>

                    <div className='row align-center text-center'>
                        <div className='column small-4 medium-2'>
                            <Link to='https://github.com/nealfennimore'>
                                <i className='icon-github'></i>
                                <span>Github</span>
                            </Link>
                        </div>
                        <div className='column small-4 medium-2'>
                            <Link to='https://www.linkedin.com/in/nealfennimore'>
                                <i className='icon-linkedin'></i>
                                <span>LinkedIn</span>
                            </Link>
                        </div>
                        <div className='column small-4 medium-2'>
                            <Link to='/blog'>
                                <i className='icon-ion-social-rss'></i>
                                <span>Blog</span>
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

Home.propTypes = {

};
