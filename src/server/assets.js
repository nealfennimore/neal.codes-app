import { map, startsWith, endsWith, filter, pipe, join, pick, some } from 'lodash';
import { getBundles } from 'react-loadable/webpack';
import stats from 'dist/assets/react-loadable.json';
import webpackAssets from 'dist/assets/webpack-assets.json';

export const mapModuleFiles = modules => map( modules, _module => _module.file );
export const isScript = file => endsWith( file, '.js' );
export const isStyle = file => endsWith( file, '.css' );
export const isChunk = file => /^\d{1,3}-\w{20}/.test( file );

export const scriptTemplate = asset=> `<script src="${asset}" defer></script>`;
export const styleTemplate = asset=> `<link href="${asset}" rel="stylesheet" />`;
export const concatWithNewLine = tags => join( tags, '\n' );

const BUNDLE_BLACKLIST = [ 'main' ];

export const filterBlacklist = ( assets )=> filter( assets, asset =>
    ! some( BUNDLE_BLACKLIST, name => startsWith( asset, name ) )
);

export const getBundleScriptFiles = pipe(
    bundles => filter( bundles, bundle => isScript( bundle.file ) ),
    mapModuleFiles,
    filterBlacklist,
);

export const getBundleStyleFiles = pipe(
    bundles => filter( bundles, bundle => isStyle( bundle.file ) ),
    mapModuleFiles,
    filterBlacklist,
);

export const getBundleScriptTags = pipe(
    getBundleScriptFiles,
    assets => map( assets, asset => scriptTemplate( `/assets/${asset}` ) ),
    concatWithNewLine
);

export const getBundleStyleTags = pipe(
    getBundleStyleFiles,
    assets => map( assets, asset => styleTemplate( `/assets/${asset}` ) ),
    concatWithNewLine
);

export const getBundleTags = ( splitModules )=>{
    const bundles = getBundles( stats, splitModules );
    return {
        scripts: getBundleScriptTags( bundles ),
        styles: getBundleStyleTags( bundles ),
    };
};

const getTag = ( bundles, filterBy, template )=> pipe(
    assets => pick( assets, bundles ),
    assets => filter( assets, filterBy ),
    assets => map( assets, filterBy ),
    assets => map( assets, template ),
    concatWithNewLine
);

const APP_CHUNK_NAMES = ['vendor', 'app', 'styles'];

export const manifest = getTag(
    [ 'manifest' ],
    asset => asset.js,
    asset=> `<script src="${asset}"></script>`
)( webpackAssets );

export const scripts = getTag(
    APP_CHUNK_NAMES,
    asset => asset.js,
    scriptTemplate
)( webpackAssets );

export const styles = getTag(
    APP_CHUNK_NAMES,
    asset => asset.css,
    styleTemplate
)( webpackAssets );
