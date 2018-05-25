import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import WithInverse from 'client/js/Global/hoc/WithInverse';
import { compose } from 'redux';
import LayoutSEO from './LayoutSEO';
import styles from './Layout.pcss';

const Layout = ( {
    children,
    className
} ) =>{
    return (
        <div className={classnames( styles.Layout, className )}>
            <LayoutSEO />
            { children }
        </div>
    );
};

Layout.defaultProps = {
    className: ''
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

const enhance = compose(
    WithInverse( styles ),
);


export default enhance( Layout );
