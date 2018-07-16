import React from 'react';
import AsyncBundle from 'client/js/Global/components/AsyncBundle';

const PostLoader = AsyncBundle(  import( './PostEntry' ) );
const Post = ()=> <PostLoader />;
export default Post;
