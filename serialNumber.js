function isValid(sn) {
  if (sn.length < 10 || sn.length > 12) return false

  var code = sn.substr(0, 3) // pos 0, take 3 characters
  if (!Boolean(code.match(/^[A-Z]{3}$/))) return false
  var uniqCode = new Set(code.split(""))
  if (Array.from(uniqCode).length !== 3) return false

  var year = sn.substr(3, 4) // yyyy, take 4 char start at index 3
  if (!Boolean(year.match(/^[\d]{4}$/))) return false
  var intYear = parseInt(year, 10)
  if (intYear < 1900 || intYear > 2019) return false

  var domin = sn.substr(7, 1) // domination leading char
  if (!Boolean(domin.match(/^[125]$/))) return false
  var intDomin = parseInt(domin, 10)

  var amount = sn.substr(8) // rest of string
  var length_of_zeros = amount.length - 1
  var lastChar = amount[length_of_zeros]
  if (!Boolean(lastChar.match(/^[A-Z]$/))) return false

  var zeros = amount.substr(0, length_of_zeros)
  if (!Boolean(zeros.match(/^[0]*$/g))) return false

  var intZeros = parseInt("1" + zeros, 10)
  var newTotal = intDomin * intZeros
  return newTotal
}

module.exports = isValid
