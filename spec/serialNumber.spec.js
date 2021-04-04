const isValid = require("../serialNumber")

describe("ATM filtering for valid serial number, corresponding value", () => {
  it("validate format head, yyyy Domination, amount, endChar", () => {
    var a = [
      "QDB2012R20B", // valid 2012 R? corrupted character
      "RED190250E", // valid 1902, $50
      "RFV201111T", // invalid, 2011, $11 bill
      "TYU20121000E", // valid 2012, $1000
      "AAA198710B", // invalid non unique head
      "AbC200010E" // invalid head not all upper case
    ]
    var valid_list = a.map(sn => isValid(sn)).filter(v => v)
    // console.log(valid_list)
    expect(valid_list.length).toEqual(2)
    expect(valid_list[0]).toEqual(50)
    expect(valid_list[1]).toEqual(1000)
  })
})
