import idx from 'idx';
import { createSelector } from 'reselect';

export const getPost = post => post;
export const getSlug = createSelector( getPost, post => idx( post, _ => _.slug ) );
