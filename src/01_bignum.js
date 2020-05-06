const { create, all } = require('mathjs')

// configure the default type of numbers as BigNumbers
const config = {
  // Default type of number
  // Available options: 'number' (default), 'BigNumber', or 'Fraction'
  number: 'BigNumber',

  // Number of significant digits for BigNumbers
  precision: 200
}
const math = create(all, config)
console.log(math.evaluate(2**65536))