import R from 'ramda'

const obj = { name: 'alex' }
const defaultToBound = R.defaultTo(obj.name.toUpperCase())

