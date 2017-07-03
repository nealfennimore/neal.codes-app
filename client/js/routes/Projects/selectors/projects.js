import get from 'lodash/get';

export const getProjects = (state)=> get(state, 'projects.projects', []);
export const getModal = (state)=> get(state, 'projects.modal', {});
