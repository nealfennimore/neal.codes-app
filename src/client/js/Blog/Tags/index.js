import React from 'react';
import AsyncBundle from 'client/js/Global/components/AsyncBundle';

const TagsLoader = AsyncBundle(  import( './TagsEntry' ) );
const Tags = ()=> <TagsLoader />;
export default Tags;
