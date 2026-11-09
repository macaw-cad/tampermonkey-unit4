const fs = require('fs')
const path = require('path')
const { extra } = require('../package.json')
const { merge } = require('webpack-merge')
const LiveReloadPlugin = require('webpack-livereload-plugin')
const { UserScriptMetaDataPlugin } = require('userscript-metadata-webpack-plugin')

const metadata = require('./metadata.cjs')
const webpackConfig = require('./webpack.config.base.cjs')

// optional, not versioned package.local.json to override the dev target and the userscript
// version for a local checkout, see package.local.example.json
const localFile = path.resolve(__dirname, '../package.local.json')
const local = fs.existsSync(localFile) ? JSON.parse(fs.readFileSync(localFile, 'utf8')) : {}
const devtarget = { ...extra.devtarget, ...(local.extra?.devtarget ?? {}) }
if (local.version) {
  metadata.version = local.version
}

metadata.name = metadata.name + " (debug)";
metadata.require.push(
  devtarget.name + '/' + 'index.debug.user.js'
)

const cfg = merge(webpackConfig, {
  entry: {
    debug: webpackConfig.entry,
    dev: path.resolve(__dirname, './empty.cjs'),
  },
  output: {
    filename: 'index.[name].user.js',
    path: devtarget.folder,
  },
  devtool: 'eval-source-map',
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    // polling necessary when projects runs in WSL2 but lives on windows drive
    poll: 1000,
  },
  plugins: [
    new LiveReloadPlugin({
      delay: 500,
    }),
    new UserScriptMetaDataPlugin({
      metadata,
    }),
  ],
});
module.exports = cfg
