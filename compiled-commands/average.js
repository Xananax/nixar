// Generated by LiveScript 1.3.1
(function(){
  module.exports = function(repo, p){
    return repo.commands.push({
      name: "average",
      desc: "Calculate average of integers",
      input: 'lines',
      output: 'line',
      enabled: true,
      compile: function(){
        return function(mask, lines){
          return arr(
          p.average(
          lines));
        };
      }
    });
  };
}).call(this);
