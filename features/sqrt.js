const sqrt = (a) => {
  if (typeof a !== "number") {
    return 'It should number!'
  } else {
    return Math.sqrt(a)
  }
}

module.exports = sqrt
