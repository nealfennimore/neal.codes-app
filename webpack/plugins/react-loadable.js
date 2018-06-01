const ReactLoadablePlugin = require( 'react-loadable/webpack' ).ReactLoadablePlugin;

const plugin = new ReactLoadablePlugin( {
    filename: './dist/assets/react-loadable.json',
} );

module.exports = plugin;
