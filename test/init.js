'use strict'
const babelConfDev = {
  presets: [require.resolve('babel-preset-react-app')]
}
// Register babel conf
require('babel-core/register')(babelConfDev)

const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const chaiSubset = require('chai-subset')
chai.use(chaiSubset)
chai.use(sinonChai)
// Js dom
const jsdom = require('jsdom')
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.window = document.defaultView
global.window.matchMedia = () => ({matches: true})
global.navigator = {
  userAgent: 'node.js'
}

const injectTapEventPlugin = require('react-tap-event-plugin')
injectTapEventPlugin()

process.on('unhandledRejection', (error) => {
  console.error('Unhandled Promise Rejection:')
  console.error(error && error.stack || error)
})
