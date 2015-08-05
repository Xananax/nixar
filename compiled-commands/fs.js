// Generated by LiveScript 1.3.1
(function(){
  module.exports = function(repo, p){
    return repo.commands.push({
      name: "fs",
      desc: "Find by mask *.* or **/*.* or */",
      input: 'nothing',
      output: 'lines',
      enabled: true,
      compile: function(){
        var glob;
        glob = require('glob');
        return function(mask, callback){
          var transformMask, transform;
          transformMask = (function(){
            switch (false) {
            case mask !== 'all':
              return '**/*';
            case mask !== 'all-filenames':
              return '**/*';
            case (mask != null ? mask : '') !== '':
              return "*";
            default:
              return mask;
            }
          }());
          transform = function(name){
            switch (false) {
            case mask !== 'all-filenames':
              return name.match(/[^/]+$/)[0];
            default:
              return name;
            }
          };
          return glob(transformMask, {}, function(err, files){
            if (err != null) {
              return console.log(err.red);
            } else {
              return callback(
              p.map(transform)(
              files));
            }
          });
        };
      }
    });
  };
}).call(this);
