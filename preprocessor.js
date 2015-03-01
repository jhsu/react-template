var transform = require('babel').transform;
var ReactTools = require('react-tools');
module.exports = {
  process: function(src, filename) {
    return ReactTools.transform(transform(src, {filename: filename}).code);
  }
};
