const decompress = require('decompress');

const unzip = ({ path, file }) => decompress(path + file, 'cypress/fixtures/')

module.exports = {
    unzip,
}