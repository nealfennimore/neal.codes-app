import React, { PropTypes } from 'react';
import Header from './Header';

function createMarkup(__html){
    return { __html };
}

const Article = ({post}) => {
    return (
        <article>
            <Header post={post} />
            <section dangerouslySetInnerHTML={createMarkup(post.html)} />
        </article>
    );
};

Article.propTypes = {
    post: PropTypes.shape({
        html: PropTypes.string.isRequired,

    })
};

export default Article;