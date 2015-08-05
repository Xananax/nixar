// Generated by LiveScript 1.3.1
(function(){
  module.exports = function(repo, p){
    return repo.commands.push({
      name: "max",
      desc: "Calculate maximum integer",
      input: 'lines',
      output: 'line',
      enabled: true,
      compile: function(){
        return function(mask, lines){
          return p.maximum(
          lines);
        };
      }
    });
  };
}).call(this);
