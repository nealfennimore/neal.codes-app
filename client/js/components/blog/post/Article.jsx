import React, { PropTypes } from 'react';
import ArticleSEO from './ArticleSEO';
import Header from './Header';
import Footer from './Footer';
import styles from './Article.scss';

function createMarkup(__html){
    return { __html };
}

const Article = ({post}) => {
    return (
        <article className='row collapse'>
            <ArticleSEO post={post} />
            <div className='columns small-12'>
                <Header post={post} />
                <section className={styles.content} dangerouslySetInnerHTML={createMarkup(post.html)} />
                <Footer post={post} />
            </div>
        </article>
    );
};

Article.propTypes = {
    post: PropTypes.shape({
        html: PropTypes.string.isRequired,
    })
};

export default Article;