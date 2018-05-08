import React from 'react';
import Loadable from 'react-loadable';

const PostsLoader = Loadable( {
    loader: () => import( './entry' ),
    loading() {
        return <div>Loading...</div>;
    },
    delay: 3000
} );


const Posts = ()=> <PostsLoader />;
export default Posts;
