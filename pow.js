function pow(num1, num2) {
    if (num1 && num2) {
        return Math.pow(num1, num2)
    } else {
        return num1
    }
}

module.exports = pow
