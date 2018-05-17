import React from 'react';
import Loadable from 'react-loadable';
import Loader from 'client/js/Global/components/Loader/ComponentLoader';

const PostLoader = Loadable( {
    loader: () => import( './entry' ),
    loading: Loader,
    delay: 300
} );


const Post = ()=> <PostLoader />;
export default Post;
