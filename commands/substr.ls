module.exports = (repo, p)->
  repo.commands.push do
    name: "substr"
    desc: "Substring"
    input: \line
    output: \line
    enabled: yes
    compile: ->
      (mask, line)->
        pars = mask.split(',')
        if pars.length is 0
          line.substr pars.0
        else
          line.substr pars.0, pars.1