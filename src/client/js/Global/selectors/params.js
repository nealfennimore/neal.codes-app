import { get } from 'lodash';

export const getParamsSlug = ( _, props ) => get( props, 'match.params.slug' );
export const getParamsPage = ( _, props ) => get( props, 'match.params.page', 1 );
