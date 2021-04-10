'use strict'

const ENV = {
  SERVER: process.env.NODE_ENV === 'production' ? '' : 'http://localhost:5000',
  API: '/api',
  ENDPOIND: {
    items: '/items'
  },
  HEADERS: {
    'Accept': 'aplication/json',
    'Content-Type': 'application/json'
  }
}

module.exports = ENV