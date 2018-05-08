import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injector from 'client/js/Global/components/Injector';
import { fetchPosts } from './actions/posts';
import postsSaga from './sagas/posts';
import postsReducer from './reducers';

export class Posts extends PureComponent {
    static propTypes = {
        fetchPosts: PropTypes.func.isRequired
    }

    componentWillMount() {
        this.props.fetchPosts( 1 );
    }

    render() {
        return (
            <div>Posts</div>
        );
    }
}

const connector = connect(
    null,
    dispatch => ( {
        fetchPosts: ( page )=> dispatch( fetchPosts( { page } ) )
    } )
);

const enhance = compose(
    connector,
    injector( {
        sagas: [ postsSaga ],
        reducers: {
            blog: postsReducer
        }
    } )
);

export default enhance( Posts );
