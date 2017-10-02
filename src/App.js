import React, { Component } from 'react'
import Calendar from './components/calendar'
import './App.css'
import moment from 'moment'
import sortBy from 'lodash/sortBy'
import difference from 'lodash/difference'
const myCalendarElementT = [ {start: 30, end: 150}, {start: 30, end: 70}, {start: 30, end: 140}, {start: 30, end: 70}, {start: 560, end: 620}, {start: 610, end: 670} ];
const myCalendarElement= [{start: 30, end: 150}, {start: 540, end: 600}, {start: 560, end: 620}, {start: 610, end: 670}]
function addTheHour (elms) {
  const sortedElementWithInformation = sortBy(elms, ['start']).reduce((acc, elm, index) => {
    const lastColision = Object.keys(acc.newElements).reduce((colisions, key, index) => {
      const toFilter = acc.newElements[key]
      if(elm.start < toFilter.end){
        colisions.push({coli: toFilter.colision, index})
      }
      return colisions
    } , [])
    if(lastColision.length === 1 ) {
      const result =  {
        previous: {...elm, colision: !acc.previous.colision ? 'C2' : (acc.previous.colision === 'C1' ? 'C2' :'C1')},
        newElements: {
          ...acc.newElements,
          [index - 1]: {
            ...acc.newElements[index - 1],
            numberOfColisition: 2,
            colision: !acc.previous.colision ? 'C1' : acc.previous.colision
          },
          [index]: {
            ...elm,
            numberOfColisition: 2,
            colision: (!acc.previous.colision) ? 'C2' : (
              acc.previous.colision === 'C1' ? // ToDO ET QUE START
               'C2' :'C1')
          }
        }
      }
      return result
    }else if (lastColision.length >= 2){
      const tailleLastColision = lastColision.length + 1
      const numberAvailable = difference(["C1", "C2", "C3", "C4"],lastColision.map(e => e.coli))
      const result =  {
        previous: {
          ...elm,
          colision: "C"+ (lastColision.length +1)
        },
        newElements: {
          ...acc.newElements,
          [index]: {
            ...elm,
            numberOfColisition: tailleLastColision,
            colision: "C"+ (lastColision.length +1)
          }
        }
      }
      lastColision.map(coli => {
         result.newElements[coli.index] = {
          ...result.newElements[coli.index],
          numberOfColisition: tailleLastColision
        }
      })
      return result
    }
    return {
      prePrevious: acc.previous,
      previous: elm,
      newElements: {
        ...acc.newElements,
        [index]: elm
      }
    }
  }, {previous: {}, newElements: {}})
  return sortedElementWithInformation
}

class App extends Component {
  render () {
    return (
      <div className='App'>

        <div className='App-content'>
          <Calendar elements={addTheHour(myCalendarElement).newElements} />
        </div>
      </div>
    )
  }
}

export default App
