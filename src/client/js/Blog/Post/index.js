import React from 'react';
import Loadable from 'react-loadable';

const PostLoader = Loadable( {
    loader: () => import( './entry' ),
    loading() {
        return <div>Loading...</div>;
    },
    delay: 3000
} );


const Post = ()=> <PostLoader />;
export default Post;
