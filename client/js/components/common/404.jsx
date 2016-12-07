import React, { PropTypes } from 'react';
import styles from 'components/global/Content.scss';

const _404 = () => {
    return (
        <div className={`row align-center align-middle ${styles.content}`}>
            <main className='column'>
                <h1>404 <small>:(</small></h1>
            </main>
        </div>
    );
};

_404.propTypes = {

};

export default _404;