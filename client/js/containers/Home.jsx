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
                        <div className='column small-3 medium-2'>
                            <a href='https://github.com/nealfennimore'>
                                <i className='icon-github'></i>
                                <span>Github</span>
                            </a>
                        </div>
                        <div className='column small-3 medium-2'>
                            <a href='https://codepen.io/nealfennimore'>
                                <i className='icon-codepen'></i>
                                <span>Codepen</span>
                            </a>
                        </div>
                        <div className='column small-3 medium-2'>
                            <a href='https://www.linkedin.com/in/nealfennimore'>
                                <i className='icon-linkedin'></i>
                                <span>LinkedIn</span>
                            </a>
                        </div>
                        <div className='column small-3 medium-2'>
                            <Link to='/blog'>
                                <i className='icon-rss'></i>
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
