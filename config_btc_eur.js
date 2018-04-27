var c = module.exports = require('./config')

c.assets = [
  'BTC'
]
c.currencies = [
  'EUR',
  'BTC'
]

// default selector for indicators, etc
c.default_selector = 'gdax.BTC-EUR'