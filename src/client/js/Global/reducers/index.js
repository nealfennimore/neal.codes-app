import { combineReducers } from 'redux';
import { map, filter, isFunction, merge, reduce, some, isObject } from 'lodash';

export const isReducer = ( reducer ) => isFunction( reducer );
export const hasNestedReducer = ( reducer ) => some( reducer, isReducer );
export const shouldCombineNextLevel = ( reducer ) => {
    return ( isReducer( reducer ) || isObject( reducer ) ) && hasNestedReducer( reducer );
};
export const mergeReducers = ( reducers ) => {
    return reduce(
        reducers,
        ( result, reducer ) => merge( result, reducer ),
        {}
    );
};

export function nestAsyncReducers( asyncReducers ) {
    const reducersAtCurrentLevel = map( asyncReducers, ( reducer, key ) => {
        // Set the key to a combination of the next level
        // NOTE: This will replace any reducer already set to this key
        if ( shouldCombineNextLevel( reducer ) ) {
            return {
                [ key ]: combineReducers(
                    nestAsyncReducers( reducer )
                )
            };

        // No nested levels, then return the reducer
        } else if ( isReducer( reducer ) ) {
            return {
                [ key ]: reducer
            };
        }
    } );

    // Return current level as an object
    return mergeReducers(
        filter( reducersAtCurrentLevel, isObject )
    );
}

export default function createReducer( asyncReducers = {} ) {
    return combineReducers( {
        ...nestAsyncReducers( asyncReducers )
    } );
}
