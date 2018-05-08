import React from 'react';
import PropTypes from 'prop-types';
import injector from 'client/js/Global/components/Injector';
import postSaga from './sagas/post';
import postReducer from './reducers';

const Post = ( props ) =>{
    return (
        <div>Post</div>
    );
};

Post.propTypes = {};

export default injector( {
    sagas: [ postSaga ],
    reducers: postReducer
} )( Post );
