import React from 'react';
import Loadable from 'react-loadable';
import Loader from 'client/js/Global/components/Loader/ComponentLoader';

const TagsLoader = Loadable( {
    loader: () => import( './TagsEntry' ),
    loading: Loader,
    delay: 300
} );


const Tags = ()=> <TagsLoader />;
export default Tags;
