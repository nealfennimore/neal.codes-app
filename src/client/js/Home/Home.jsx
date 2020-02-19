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
                        <h2>Full Stack Developer</h2>
                    </hgroup>
                </header>
                <p>
                    {
                        `I'm a full-stack developer specializing in security and UI. I'm a polyglot programmer versed in Javascript, Ruby, PHP, Rust, SQL, Docker, and HTML/CSS. I have experience building complex applications with React, performing security audits, and orchestrating deployments within cloud ecosystems. I'm usually researching security and operating systems in my spare time.`
                    }
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
