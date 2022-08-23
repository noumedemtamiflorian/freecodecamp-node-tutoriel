const _ = require('lodash')

const newitems = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(newitems)

console.log(newItems);