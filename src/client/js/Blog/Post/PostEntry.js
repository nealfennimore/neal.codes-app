/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import Main from 'client/js/Global/components/Main';
import injector from 'client/js/Global/components/Injector';
import { PostPropType } from 'client/js/Global/proptypes/post';
import Article from 'client/js/Blog/Post/components/Article';
import { fetchPost } from './actions/post';
import { getPostBySlug, shouldFetchPost, isFetching } from './selectors/post';
import postSaga from './sagas/post';
import postReducer from './reducers/post';
import styles from './PostEntry.pcss';

export class PostEntry extends PureComponent {
    static propTypes = {
        fetchPost: PropTypes.func.isRequired,
        isFetching: PropTypes.bool.isRequired,
        match: PropTypes.shape( {
            params: PropTypes.shape( {
                slug: PropTypes.string
            } )
        } ).isRequired,
        post: PostPropType,
        shouldFetchPost: PropTypes.bool.isRequired,
    }

    componentWillMount() {
        this.fetchPost();
    }

    componentDidUpdate() {
        this.fetchPost();
    }

    fetchPost() {
        if( this.props.shouldFetchPost ) {
            this.props.fetchPost( this.props.match.params );
        }
    }

    render() {
        return (
            <Main className={styles.PostEntry}>
                {
                    this.props.post && ! this.props.isFetching
                        ? <Article post={this.props.post} />
                        : null
                }
            </Main>
        );
    }
}

const connector = connect(
    ( state, ownProps ) => ( {
        post: getPostBySlug( state, ownProps ),
        shouldFetchPost: shouldFetchPost( state, ownProps ),
        isFetching: isFetching( state, ownProps )
    } ),
    dispatch => ( {
        fetchPost: ( params )=> dispatch( fetchPost( params ) )
    } )
);

const enhance = compose(
    withRouter,
    connector,
    injector( {
        sagas: [ postSaga ],
        reducers: {
            'blog.post': postReducer
        }
    } )
);

export default enhance( PostEntry );
