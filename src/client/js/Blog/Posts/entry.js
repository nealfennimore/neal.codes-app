/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Main from 'client/js/Global/components/Main';
import injector from 'client/js/Global/components/Injector';
import { fetchPosts } from './actions/posts';
import { getPostsByPage, isFetching, getNextPage, getPrevPage, getPage } from './selectors/posts';
import postsSaga from './sagas/posts';
import postsReducer from './reducers';

export class Posts extends PureComponent {
    static propTypes = {
        fetchPosts: PropTypes.func.isRequired,
        match: PropTypes.shape( {
            params: PropTypes.object
        } ).isRequired,
        posts: PropTypes.arrayOf( PropTypes.object ),
        prevPage: PropTypes.number.isRequired,
        nextPage: PropTypes.number.isRequired,
        page: PropTypes.number.isRequired,
        isFetching: PropTypes.bool.isRequired
    }

    static defaultProps = {
        posts: []
    }

    componentWillMount() {
        this.props.fetchPosts( this.page );
    }

    componentWillUpdate( nextProps ) {
        if(
            ! this.hasPosts &&
            ! this.props.isFetching &&
            nextProps.match.params.page &&
            this.props.page != nextProps.match.params.page
        ) {
            this.props.fetchPosts( nextProps.match.params.page );
        }

    }

    get hasPosts() {
        return !! ( this.props.posts && this.props.posts.length );
    }

    get page() {
        return this.props.match.params.page || 1;
    }

    render() {
        return (
            <Main>
                <Fragment>
                    <div>Posts {this.page}</div>
                    {
                        this.props.posts.map( ( post )=>(
                            <article>
                                {post.title}
                            </article>
                        ) )
                    }
                    {
                        !! this.props.prevPage && (
                            <Link to={`/blog/page/${this.props.prevPage}`} >
                                Prev
                            </Link>
                        )
                    }
                    {
                        !! this.props.nextPage && (
                            <Link to={`/blog/page/${this.props.nextPage}`} >
                                Next
                            </Link>
                        )
                    }
                </Fragment>
            </Main>
        );
    }
}

const connector = connect(
    state => ( {
        posts: getPostsByPage( state ),
        isFetching: isFetching( state ),
        prevPage: getPrevPage( state ),
        nextPage: getNextPage( state ),
        page: getPage( state )
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
            blog: postsReducer
        }
    } )
);

export default enhance( Posts );
