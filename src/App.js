import React, { Component } from 'react'
import Calendar from './components/calendar'

export const myCalendarElementTest2 = [
  { start: 30, end: 729 },
  { start: 560, end: 570 },
  { start: 610, end: 670 }
]
export const myCalendarElementTest3 = [
  { start: 30, end: 150 },
  { start: 30, end: 70 },
  { start: 30, end: 140 },
  { start: 30, end: 70 },
  { start: 560, end: 620 },
  { start: 610, end: 670 }
]

export const myCalendarElement = [
  { start: 30, end: 150 },
  { start: 540, end: 600 },
  { start: 560, end: 620 },
  { start: 610, end: 670 }
]

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-content'>
          <Calendar elements={myCalendarElementTest3} />
        </div>
      </div>
    )
  }
}

export default App
