/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import Main from 'client/js/Global/components/Main';
import injector from 'client/js/Global/components/Injector';
import Loader from 'client/js/Global/components/Loader';
import { PostPropType } from 'client/js/Global/proptypes/post';
import { getParamsPage } from 'client/js/Global/selectors/params';
import { fetchPosts, syncPage } from './actions/posts';
import { getPostsByPage, getNextPage, getPrevPage, getPage, getTotalPages, shouldFetchPosts, isFetching } from './selectors/posts';
import postsSaga from './sagas/posts';
import postsReducer from './reducers/posts';
import Pagination from './components/Pagination';
import Posts from './components/Posts';
import PostsSEO from './PostsSEO';
import styles from './Posts.pcss';

export class PostsEntry extends PureComponent {
    static propTypes = {
        fetchPosts: PropTypes.func.isRequired,
        isFetching: PropTypes.bool.isRequired,
        match: PropTypes.shape( {
            params: PropTypes.object
        } ).isRequired,
        nextPage: PropTypes.number,
        page: PropTypes.number,
        pages: PropTypes.number,
        posts: PropTypes.arrayOf( PostPropType ),
        prevPage: PropTypes.number,
        shouldFetchPosts: PropTypes.bool.isRequired,
        shouldSyncPage: PropTypes.bool.isRequired,
        syncPage: PropTypes.func.isRequired,
    }

    static defaultProps = {
        posts: [],
        prevPage: 0,
        nextPage: 0,
        page: 0
    }

    componentWillMount() {
        this.fetchPosts();
    }

    componentDidUpdate() {
        this.syncPage();
        this.fetchPosts();
    }

    get page() {
        return this.props.match.params.page || 1;
    }

    fetchPosts() {
        if( this.props.shouldFetchPosts ) {
            this.props.fetchPosts( this.page );
        }
    }

    syncPage() {
        if( this.props.shouldSyncPage ) {
            this.props.syncPage( this.page );
        }
    }

    render() {
        return (
            <Main className={styles.Posts}>
                {
                    this.props.isFetching || this.props.shouldFetchPosts
                        ? <Loader />
                        : (
                            <Fragment>
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
                            </Fragment>
                        )
                }
            </Main>
        );
    }
}

const connector = connect(
    ( state, ownProps ) => ( {
        isFetching: isFetching( state, ownProps ),
        nextPage: getNextPage( state, ownProps ),
        page: getPage( state, ownProps ),
        pages: getTotalPages( state, ownProps ),
        posts: getPostsByPage( state, ownProps ),
        prevPage: getPrevPage( state, ownProps ),
        shouldFetchPosts: shouldFetchPosts( state, ownProps ),
        shouldSyncPage: getParamsPage( state, ownProps ) != getPage( state, ownProps )
    } ),
    dispatch => ( {
        fetchPosts: ( page )=> dispatch( fetchPosts( { page } ) ),
        syncPage: page => dispatch( syncPage( page ) )
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
