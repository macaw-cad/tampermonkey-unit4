const { name, author, version, repository } = require('../package.json')

module.exports = {
  name: name,
  description: 'Unit4 enhancements - will enhance the user interface and add some new features (macaw Unit4 only)',
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
