function isValid(sn) {
  if (sn[0] === sn[1] || sn[0] === sn[2] || sn[1] === sn[2]) return false
  var terms = sn.match(/^([A-Z]{3})(\d{4})(\d{1})(0*)([A-Z])$/)
  if (!terms) return false
  const iY = parseInt(terms[2])
  if (iY < 1900 || iY > 2019) return false
  var newTotal = parseInt(terms[3]) * parseInt("1" + terms[4], 10)
  return newTotal
}

module.exports = isValid
