import React from 'react';
import Loadable from 'react-loadable';
import Loader from 'client/js/Global/components/Loader/ComponentLoader';

const PostsLoader = Loadable( {
    loader: () => import( './PostsEntry' ),
    loading: Loader,
    delay: 300
} );


const Posts = ()=> <PostsLoader />;
export default Posts;
