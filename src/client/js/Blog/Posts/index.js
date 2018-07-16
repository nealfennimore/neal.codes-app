import React from 'react';
import AsyncBundle from 'client/js/Global/components/AsyncBundle';

const PostsLoader = AsyncBundle( import( './PostsEntry' ) );
const Posts = ()=> <PostsLoader />;
export default Posts;
