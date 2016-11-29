import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './NavigationLinks.scss';

const links = [
    {
        title: 'Projects',
        path: '/projects'
    },
    {
        title: 'Blog',
        path: '/blog'
    }
];

const Links = (props) => {
    return (
        <ul className={`${styles.links} column shrink`}>
            {links.map((l)=>
                <li key={l.title}>
                    <Link to={l.path} activeClassName={styles.active}>
                        {l.title}
                    </Link>
                </li>
            )}
        </ul>
    );
};

Links.propTypes = {

};

export default Links;