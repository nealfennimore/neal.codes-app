import React, { Component } from 'react';
import {
    getHTML
} from 'client/js/Global/selectors/post';
import hljs from 'client/js/lib/highlight';
import { PostPropType } from 'client/js/Global/proptypes/post';
import Header from '../Header';
import Footer from '../Footer';
import styles from './Article.pcss';

export default class Article extends Component {
    componentDidMount() {
        setTimeout( this.highlight, 100 );
    }

    highlight() {
        const codeBlocks = Array.from( document.querySelectorAll( 'pre code' ) );
        codeBlocks.forEach( block => hljs.highlightBlock( block ) );
    }

    render() {
        const { post } = this.props;

        return (
            <article className={styles.Article}>
                <Header post={post} />
                <section
                    className={styles.content}
                    /* eslint-disable react/no-danger */
                    dangerouslySetInnerHTML={{
                        __html: getHTML( post )
                    }}
                    /* eslint-enable react/no-danger */
                />
                <Footer post={post} />
            </article>
        );
    }
}


Article.propTypes = {
    post: PostPropType
};
