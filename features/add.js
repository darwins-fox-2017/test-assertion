const add = (a, b) => {
  if (!b){
    return 'It should 2 params!'
  } else if (typeof a !== "number" || typeof b !== "number") {
    return 'It should number!'
  } else {
    return a + b
  }
}

module.exports = add
