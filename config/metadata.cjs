const { name, author, version, repository } = require('../package.json')

module.exports = {
  name: name,
  namespace: 'https://ubw.unit4cloud.com/',
  version: version,
  author: author,
  source: repository.url,
  license: 'MIT',
  match: [
    'https://ubw.unit4cloud.com/*',
    'https://ubw-preview.unit4cloud.com/*'
  ],
  require: [],
  grant: [],
  'run-at': 'document-end'
}
