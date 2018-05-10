import React from 'react';
import Loadable from 'react-loadable';

const TagsLoader = Loadable( {
    loader: () => import( './entry' ),
    loading() {
        return <div>Loading...</div>;
    },
    delay: 3000
} );


const Tags = ()=> <TagsLoader />;
export default Tags;
