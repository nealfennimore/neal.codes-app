import { difference, map, values, flatten, uniqBy, endsWith, filter, pipe, curry, join } from 'lodash';

export const mapModuleFiles = modules => map( modules, _module => _module.file );
export const isScript = file => endsWith( file, '.js' );
export const isStyle = file => endsWith( file, '.css' );
export const isChunk = file => /^\d{1,3}-\w{20}/.test( file );

export const getFiles = pipe(
    values,
    flatten,
    modules => uniqBy( modules, 'file' ),
    mapModuleFiles
);

export const getScriptFiles = pipe(
    getFiles,
    files => filter( files, isScript )
);

export const getStyleFiles = pipe(
    getFiles,
    files => filter( files, isStyle )
);

export const getBundleScriptFiles = pipe(
    bundles => filter( bundles, bundle => isScript( bundle.file ) ),
    mapModuleFiles
);

export const getBundleStyleFiles = pipe(
    bundles => filter( bundles, bundle => isStyle( bundle.file ) ),
    mapModuleFiles
);

export const getAppScriptFiles = pipe(
    ( stats, bundles )=> difference( getScriptFiles( stats ), getBundleScriptFiles( bundles ) ),
    ( files ) => filter( files, file => ! isChunk( file ) )
);

export const getAppStyleFiles = pipe(
    ( stats, bundles )=> difference( getStyleFiles( stats ), getBundleStyleFiles( bundles ) ),
    ( files ) => filter( files, file => ! isChunk( file ) )
);

export const scriptTemplate = asset=> `<script src="/assets/${asset}" defer></script>`;
export const createScriptTags = pipe(
    assets => map( assets, scriptTemplate ),
    tags => join( tags, '\n' )
);

export const getScriptTags = pipe(
    ( ...args )=> getAppScriptFiles( ...args ),
    createScriptTags
);
export const getBundleScriptTags = pipe(
    getBundleScriptFiles,
    createScriptTags
);

export const styleTemplate = asset=> `<link href="/assets/${asset}" rel="stylesheet" />`;
export const createStyleTags = pipe(
    assets => map( assets, styleTemplate ),
    tags => join( tags, '\n' )
);

export const getStyleTags = pipe(
    ( ...args )=> getAppStyleFiles( ...args ),
    createStyleTags
);
export const getBundleStyleTags = pipe(
    getBundleStyleFiles,
    createStyleTags
);
