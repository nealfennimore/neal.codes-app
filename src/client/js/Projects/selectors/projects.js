import idx from 'idx';
import { createSelector } from 'reselect';

export const selector = state => idx( state, _=> _.projects );
export const getProjects = createSelector( selector, select => idx( select, _=> _.projects ) );
export const getModal = createSelector( selector, select => idx( select, _=> _.modal ) );
