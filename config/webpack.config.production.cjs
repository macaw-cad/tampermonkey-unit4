const { execSync } = require('child_process');
const { merge } = require('webpack-merge')
const { UserScriptMetaDataPlugin } = require('userscript-metadata-webpack-plugin')

const metadata = require('./metadata.cjs')
const webpackConfig = require('./webpack.config.base.cjs')

const gitBranch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();

if (gitBranch !== 'main') {
  metadata.name = metadata.name + " (" + gitBranch + ")";
}

const cfg = merge(webpackConfig, {
  mode: 'production',
  output: {
    filename: 'index.prod.user.js',
  },
  plugins: [
    new UserScriptMetaDataPlugin({
      metadata,
    }),
  ],
})

module.exports = cfg
