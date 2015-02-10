require('6to5/register');
require('rx');
var to5 = require('6to5');
var ReactTools = require('react-tools');
module.exports = {
  process: function(src, filename) {
    return ReactTools.transform(to5.transform(src, {filename: filename}).code);
  }
};
