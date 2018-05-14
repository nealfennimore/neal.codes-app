import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import Main from 'client/js/Global/components/Main';
import WithInverse from 'client/js/Global/hoc/WithInverse';
import PageInverse from 'client/js/Global/hoc/PageInverse';
import styles from './Home.pcss';

export const Home = ( props ) =>{
    return (
        <Main className={styles.Home}>
            <section>
                <header>
                    <hgroup>
                        <h1>Neal Fennimore</h1>
                        <h2>Front End Developer</h2>
                    </hgroup>
                </header>
                <p>
                    I'm a full-stack web developer specializing in design and front-end engineering. I'm a polyglot programmer versed in Javascript, Ruby, PHP, and HTML/CSS. I have experience building with front-end frameworks Backbone and React, building single-page applications, and creating data visualization in D3 and CSS3.
                </p>
                <footer>
                    <a href='https://github.com/nealfennimore'>
                        <i className='icon-github' />
                        <span>Github</span>
                    </a>
                    <a href='https://codepen.io/nealfennimore'>
                        <i className='icon-codepen' />
                        <span>Codepen</span>
                    </a>
                    <a href='https://keybase.io/nealfennimore'>
                        <i className='icon-keybase' />
                        <span>Keybase</span>
                    </a>
                    <a href='https://www.linkedin.com/in/nealfennimore'>
                        <i className='icon-linkedin' />
                        <span>LinkedIn</span>
                    </a>
                </footer>
            </section>
        </Main>
    );
};

const enhance = compose(
    WithInverse( styles ),
    PageInverse,
);

export default enhance( Home );
