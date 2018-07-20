import React from 'react';
import PropTypes from 'prop-types';
import Main from 'client/js/Global/components/Main';
import Loader from 'client/js/Global/components/Loader';
import styles from './MainLoader.pcss';

const MainLoader = ( props ) =>{
    return (
        <Main>
            <Loader className={styles.loader} />
        </Main>
    );
};

MainLoader.propTypes = {};

export default MainLoader;
