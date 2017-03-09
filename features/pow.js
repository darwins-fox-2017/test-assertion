const pow = (a, b) => {
  if (!b){
    return 'It should 2 params!'
  } else if (typeof a !== "number" || typeof b !== "number") {
    return 'It should number!'
  } else {
    return Math.pow(a, b)
  }
}

module.exports = pow
