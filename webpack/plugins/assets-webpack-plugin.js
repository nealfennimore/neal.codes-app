const { resolve } = require( 'path' );
const AssetsPlugin = require( 'assets-webpack-plugin' );

const plugin = new AssetsPlugin( {
    path: resolve( __dirname, '../../dist/assets' )
} );

module.exports = plugin;
