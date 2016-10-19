function get (index){
  return d.get(index)
}

function poke (index){
  memory[index] = memory[0]
  return ''
}

function peek (index){
  return memory[index]
}

function set (index){
  return d.set(index, memory[0])
}

function add (index){
  return memory[0] + memory[index]
}