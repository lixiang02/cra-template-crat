
const path = require('path')
const package = require('./package.json')

module.exports = {
    currentVersion: package.version,
    patchVersionList: package.patchVersionList,
    templatePath: path.join(__dirname, 'template'),
    templateJsonPath: path.join(__dirname, 'template.json'),
    diffPath: path.join(__dirname, '.diff')
}