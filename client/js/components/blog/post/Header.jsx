import React, { PropTypes } from 'react';
import Date from 'components/blog/common/Date';
import Tags from 'components/blog/common/Tags';
import styles from './Header.scss';

const Header = ({post}) => {
    return (
        <header className={`${styles.header} row collapse`}>
            <div className='columns'>

                <h1 className={styles.title}>
                    {post.title}
                </h1>

                <div className='row align-justify align-middle collapse'>
                    <Date date={post.created_at} className={`column shrink ${styles.date}`}/>
                    <Tags tags={post.tags} className='column shrink' />
                </div>

            </div>
        </header>
    );
};

Header.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.object),
        /* eslint camelcase:0 */
        created_at: PropTypes.string.isRequired,
        updated_at: PropTypes.string.isRequired
    })
};

export default Header;