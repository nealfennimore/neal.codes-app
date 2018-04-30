import React, { PropTypes } from 'react';
import Date from 'components/blog/common/Date';
import Tags from 'components/blog/common/Tags';
import styles from './Header.scss';

const Header = ({post}) => {
    const { published_at, updated_at } = post;
    const isUpdated = updated_at && published_at.slice(0, 10) !== updated_at.slice(0, 10);

    return (
        <header className={`row collapse ${styles.header}`}>
            <div className='columns'>

                <h1>
                    {post.title}
                </h1>

                <div className='row align-justify align-middle collapse'>
                    <div className='column shrink'>
                        <small className={styles.small}>
                            Published <Date date={published_at} className={styles.date} />
                        </small>
                        {
                            isUpdated ?
                            <small className={styles.small}>
                                <br/>Last updated <Date date={updated_at} className={styles.date} />
                            </small> :
                            null
                        }
                    </div>
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
        published_at: PropTypes.string.isRequired,
        updated_at: PropTypes.string.isRequired
    })
};

export default Header;