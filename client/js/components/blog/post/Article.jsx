import React, { PropTypes, Component } from 'react';
import hljs from 'lib/highlight';
import ArticleSEO from './ArticleSEO';
import Header from './Header';
import Footer from './Footer';
import styles from './Article.scss';

export default class Article extends Component {
    componentDidMount(){
        setTimeout(this.highlight, 0);
    }

    highlight(){
        const codeBlocks = Array.from( document.querySelectorAll('pre code') );
        codeBlocks.forEach(block => hljs.highlightBlock(block));
    }

    createMarkup(__html){
        return { __html };
    }

    render() {
        const { post } = this.props;

        return (
            <article className='row collapse'>
                <ArticleSEO post={post} />
                <div className='columns small-12'>
                    <Header post={post} />
                    <section
                        className={styles.content} dangerouslySetInnerHTML={this.createMarkup(post.html)}
                    />
                    <Footer post={post} />
                </div>
            </article>
        );
    }
}


Article.propTypes = {
    post: PropTypes.shape({
        html: PropTypes.string.isRequired,
    }).isRequired
};