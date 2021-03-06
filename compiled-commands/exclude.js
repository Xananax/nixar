// Generated by LiveScript 1.3.1
(function(){
  module.exports = function(repo){
    return repo.commands.push({
      name: "exclude",
      desc: "Exclude line by founded mask",
      input: 'line',
      output: 'line',
      enabled: true,
      doc: {
        examples: ['']
      },
      compile: function(){
        return function(mask, input){
          if ((mask != null ? mask : "") === "") {
            return (input != null ? input : "") === "" ? null : input;
          }
          if (input.match(mask)) {
            return null;
          } else {
            return input;
          }
        };
      }
    });
  };
}).call(this);
