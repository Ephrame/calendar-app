import React from 'react'
import ReactDOM from 'react-dom'
import './style.js'
import App from './App'
const EventEmitter = require('events')

class AddDayEmitter extends EventEmitter {}
export const addDayEmitter = new AddDayEmitter()

function _layoutDay (newDay, isDelete) {
  if(isDelete){
    addDayEmitter.emit('transformDays', newDay)

  } else {
    addDayEmitter.emit('addDays', newDay)
  }
}
window.layoutDay = _layoutDay

ReactDOM.render(<App />, document.getElementById('root'))
