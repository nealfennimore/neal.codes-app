import idx from 'idx';
import { createSelector } from 'reselect';

const getPost = post => post;
export const getID = createSelector( getPost, post => idx( post, _ => _.id ) );
export const getSlug = createSelector( getPost, post => idx( post, _ => _.slug ) );
export const getTitle = createSelector( getPost, post => idx( post, _ => _.title ) );
export const getHTML = createSelector( getPost, post => idx( post, _ => _.html ) );
export const getPlainText = createSelector( getPost, post => idx( post, _ => _.plaintext ) );
export const getMetaDescription = createSelector( getPost, post => idx( post, _ => _.meta_description ) );
export const getMetaTitle = createSelector( getPost, post => idx( post, _ => _.meta_title ) );
export const getPublishedAt = createSelector( getPost, post => idx( post, _ => _.published_at ) );
export const getUpdatedAt = createSelector( getPost, post => idx( post, _ => _.updated_at ) );
export const getTags = createSelector( getPost, post => idx( post, _ => _.tags ) );
export const getURL = createSelector( getPost, post => idx( post, _ => _.url ) );
