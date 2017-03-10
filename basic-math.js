// pertambahan, pengurangan, perkalian, pembagian, akar, pangkat

let math = {}

math.pertambahan= function (a,b) {
  if (!b) {
    return "harus memasukkan 2 parameter"
  } else if(typeof a !== 'number' || typeof b !== 'number') {
    return "parameter harus number"
  } else {
    return a + b
  }

}

math.pengurangan= function (a,b) {
  if (!b) {
    return "harus memasukkan 2 parameter"
  } else if(typeof a !== 'number' || typeof b !== 'number') {
    return "parameter harus number"
  } else {
    return a - b
  }
}

math.perkalian= function (a,b) {
  if (!b) {
    return "harus memasukkan 2 parameter"
  } else if(typeof a !== 'number' || typeof b !== 'number') {
    return "parameter harus number"
  } else {
    return a * b
  }
}

math.pembagian = function (a,b) {
  if (!b) {
    return "harus memasukkan 2 parameter"
  } else if(typeof a !== 'number' || typeof b !== 'number') {
    return "parameter harus number"
  } else {
    return a / b
  }
}

math.akar = function(a) {
  if (a == null) {
    return "harus memasukkan 1 parameter"
  } else if(typeof a !== 'number') {
    return "parameter harus number"
  } else {
    return Math.sqrt(a)
  }
}

math.pangkat = function (a,b) {
  if (!b) {
    return "harus memasukkan 2 parameter"
  } else if(typeof a !== 'number' || typeof b !== 'number') {
    return "parameter harus number"
  } else {
    return Math.pow(a,b)
  }
}

module.exports = math
