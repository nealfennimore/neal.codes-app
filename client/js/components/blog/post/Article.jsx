import React, { PropTypes } from 'react';
import Header from './Header';
import Footer from './Footer';

function createMarkup(__html){
    return { __html };
}

const Article = ({post}) => {
    return (
        <article className='row collapse'>
            <div className='columns small-12'>
                <Header post={post} />
                <section dangerouslySetInnerHTML={createMarkup(post.html)} />
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