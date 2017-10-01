import React, { Component } from 'react'
import Calendar from './components/calendar'
import './App.css'
import moment from 'moment'
const myCalendarElement = [
  {
    start: '30',
    end: '90',
    comment: 'First Exemple'
  },
  {
    start: '30',
    end: '70',
    comment: 'First Exemple'
  }
]

function transformElements (elms) {
  const referenceHour = moment().hour(9).minute(0)
  return elms.reduce((acc, planningElm) => {
    const hourSinceReferenceHour = moment(referenceHour).add(planningElm.start, 'minutes')
    const endHourSinceReferenceHour = moment(referenceHour).add(planningElm.end, 'minutes')
    const hourFind = hourSinceReferenceHour.hour()
    const endHour = endHourSinceReferenceHour.hour()
    // const hourInTotalSinceReference = referenceHour.add(planningElm.end, 'minutes')
    const diffHour = endHour - hourFind
    const diffArray = Array(diffHour + 1).fill(1)
    diffArray.map((diffHour, index) => {
      const newReference = moment().hour(hourFind + index).minute(0)
      const diffMinutesToStart = hourSinceReferenceHour.diff(newReference, 'minutes')
      const diffMinutesToEnd = endHourSinceReferenceHour.diff(newReference, 'minutes')
      acc[newReference.hour()] = [
        ...(acc[newReference.hour()] ? acc[newReference.hour()] : {}),
        {
          ...planningElm,
          diffMinute: [diffMinutesToStart + 1 > 0 ? diffMinutesToStart : 0, diffMinutesToEnd + 1]
        }
      ]
    })
    return acc
  }, {})
}

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Calendar App</h1>
        </header>
        <div className='App-content'>
          <Calendar elements={transformElements(myCalendarElement)} />
        </div>
      </div>
    )
  }
}

export default App
