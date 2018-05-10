/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import Main from 'client/js/Global/components/Main';
import injector from 'client/js/Global/components/Injector';
import { PostsPropType } from 'client/js/Global/proptypes/post';
import Pagination from 'client/js/Blog/Posts/components/Pagination';
import Posts from 'client/js/Blog/Posts/components/Posts';
import { fetchTags } from './actions/tags';
import { getPostsByPage, getNextPage, getPrevPage, getPage, getTotalPages, shouldFetchPosts } from './selectors/tags';
import tagSaga from './sagas/tags';
import tagReducer from './reducers/tags';
import styles from './Tags.pcss';

export class TagsEntry extends PureComponent {
    static propTypes = {
        fetchTags: PropTypes.func.isRequired,
        match: PropTypes.shape( {
            params: PropTypes.object
        } ).isRequired,
        nextPage: PropTypes.number,
        page: PropTypes.number,
        pages: PropTypes.number,
        posts: PostsPropType,
        prevPage: PropTypes.number,
        shouldfetchPosts: PropTypes.bool.isRequired
    }

    static defaultProps = {
        posts: [],
        prevPage: 0,
        nextPage: 0,
        page: 0
    }

    componentWillMount() {
        this.props.fetchTags( {
            page: this.page,
            slug: this.slug
        } );
    }

    componentWillReceiveProps( nextProps ) {
        if( this.props.shouldfetchPosts ) {
            this.props.fetchTags( {
                page: nextProps.match.params.page,
                slug: nextProps.match.params.slug
            } );
        }
    }

    get slug() {
        return this.props.match.params.slug;
    }

    get page() {
        return this.props.match.params.page || 1;
    }

    render() {
        return (
            <Main className={styles.Tags}>
                <section>
                    <header>
                        <h1 className="h2">
                            Tag: {this.slug}
                        </h1>
                    </header>
                    <Posts posts={this.props.posts} />
                    <Pagination
                        nextPage={this.props.nextPage}
                        page={this.props.page}
                        pages={this.props.pages}
                        prefix={`/blog/tag/${this.slug}/page`}
                        prevPage={this.props.prevPage}
                    />
                </section>
            </Main>
        );
    }
}

const connector = connect(
    ( state, ownProps ) => ( {
        nextPage: getNextPage( state, ownProps ),
        page: getPage( state, ownProps ),
        pages: getTotalPages( state, ownProps ),
        prevPage: getPrevPage( state, ownProps ),
        shouldfetchPosts: shouldFetchPosts( state, ownProps ),
        posts: getPostsByPage( state, ownProps ),
    } ),
    dispatch => ( {
        fetchTags: ( params )=> dispatch( fetchTags( params ) )
    } )
);

const enhance = compose(
    withRouter,
    connector,
    injector( {
        sagas: [ tagSaga ],
        reducers: {
            'blog.tags': tagReducer
        }
    } )
);

export default enhance( TagsEntry );
