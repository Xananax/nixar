module.exports = (repo, p)->
  repo.commands.push do
    name: "reverse"
    desc: "Reverse the order of output"
    input: \lines
    output: \lines
    enabled: yes
    doc: 
      examples: 
        * ''
        ...
    compile: ->
      (mask, lines)->
         lines |> p.reverse