var _ = require('underscore');

var utils = {};

utils.parseArgs = function(args){
  args = _.map(args,function(a){
    if(a === "true"){
      return true
    }
    else if(a === "false"){
      return false;
    }
    else if(_.isString(a) && a.match(/^\{/)){
      return JSON.parse(a);
    }
    else{
      return a.toString();
    }
  });
  return args;
};

module.exports = utils;
