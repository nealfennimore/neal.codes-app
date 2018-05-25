/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import Main from 'client/js/Global/components/Main';
import injector from 'client/js/Global/components/Injector';
import { PostPropType } from 'client/js/Global/proptypes/post';
import { fetchPosts } from './actions/posts';
import { getPostsByPage, getNextPage, getPrevPage, getPage, getTotalPages, shouldFetchPosts } from './selectors/posts';
import postsSaga from './sagas/posts';
import postsReducer from './reducers/posts';
import Pagination from './components/Pagination';
import Posts from './components/Posts';
import PostsSEO from './PostsSEO';
import styles from './Posts.pcss';

export class PostsEntry extends PureComponent {
    static propTypes = {
        fetchPosts: PropTypes.func.isRequired,
        match: PropTypes.shape( {
            params: PropTypes.object
        } ).isRequired,
        nextPage: PropTypes.number,
        page: PropTypes.number,
        pages: PropTypes.number,
        posts: PropTypes.arrayOf( PostPropType ),
        prevPage: PropTypes.number,
        shouldFetchPosts: PropTypes.bool.isRequired
    }

    static defaultProps = {
        posts: [],
        prevPage: 0,
        nextPage: 0,
        page: 0
    }

    componentWillMount() {
        this.props.fetchPosts( this.page );
    }

    componentWillReceiveProps( nextProps ) {
        if( this.props.shouldFetchPosts ) {
            this.props.fetchPosts( nextProps.match.params.page );
        }
    }

    get page() {
        return this.props.match.params.page || 1;
    }

    render() {
        return (
            <Main className={styles.Posts}>
                <PostsSEO />
                <section>
                    <Posts posts={this.props.posts} />
                    <Pagination
                        nextPage={this.props.nextPage}
                        page={this.props.page}
                        pages={this.props.pages}
                        prefix="/blog/page"
                        prevPage={this.props.prevPage}
                    />
                </section>
            </Main>
        );
    }
}

const connector = connect(
    state => ( {
        nextPage: getNextPage( state ),
        page: getPage( state ),
        pages: getTotalPages( state ),
        posts: getPostsByPage( state ),
        prevPage: getPrevPage( state ),
        shouldFetchPosts: shouldFetchPosts( state ),
    } ),
    dispatch => ( {
        fetchPosts: ( page )=> dispatch( fetchPosts( { page } ) )
    } )
);

const enhance = compose(
    withRouter,
    connector,
    injector( {
        sagas: [ postsSaga ],
        reducers: {
            'blog.posts': postsReducer
        }
    } )
);

export default enhance( PostsEntry );
