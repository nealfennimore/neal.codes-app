import React, { PropTypes } from 'react';
import Header from './Header';
import Footer from './Footer';

function createMarkup(__html){
    return { __html };
}

const Article = ({post}) => {
    return (
        <article>
            <Header post={post} />
            <section dangerouslySetInnerHTML={createMarkup(post.html)} />
            <Footer post={post} />
        </article>
    );
};

Article.propTypes = {
    post: PropTypes.shape({
        html: PropTypes.string.isRequired,

    })
};

export default Article;