import { describe, it } from 'mocha'
import { expect } from 'chai'
import { transformSlot } from '../index'

import {
  myCalendarElementTest2,
  myCalendarElementTest3,
  myCalendarElement
} from '../../App.js'

describe('transformSlot', () => {
  it('should be a function', () => {
    expect(transformSlot).to.be.an('function')
  })
  it('should transform the first example', () => {
    const newElements = transformSlot(myCalendarElement)
    const resultsWanted = [
      { numberOfColision: undefined, colision: undefined },
      { numberOfColision: 2, colision: 'C1' },
      { numberOfColision: 2, colision: 'C2' },
      { numberOfColision: 2, colision: 'C1' }
    ]
    expect(newElements).to.be.an('object')
    resultsWanted.forEach((elm, index) => {
      expect(elm.numberOfColisition).to.be.equal(resultsWanted[index].numberOfColisition)
      expect(elm.colision).to.be.equal(resultsWanted[index].colision)
    })
  })
  it('should transform the second example', () => {
    const newElements = transformSlot(myCalendarElementTest2)
    const resultsWanted = [
      { numberOfColision: 2, colision: 'C1' },
      { numberOfColision: 2, colision: 'C2' },
      { numberOfColision: 2, colision: 'C2' }
    ]
    expect(newElements).to.be.an('object')
    resultsWanted.forEach((elm, index) => {
      expect(elm.numberOfColisition).to.be.equal(resultsWanted[index].numberOfColisition)
      expect(elm.colision).to.be.equal(resultsWanted[index].colision)
    })
  })
  it('should transform the third example', () => {
    const newElements = transformSlot(myCalendarElementTest3)
    const resultsWanted = [
      { numberOfColision: 4, colision: 'C1' },
      { numberOfColision: 4, colision: 'C2' },
      { numberOfColision: 4, colision: 'C3' },
      { numberOfColision: 4, colision: 'C4' },
      { numberOfColision: 2, colision: 'C1' },
      { numberOfColision: 2, colision: 'C2' }
    ]
    expect(newElements).to.be.an('object')
    resultsWanted.forEach((elm, index) => {
      expect(elm.numberOfColisition).to.be.equal(resultsWanted[index].numberOfColisition)
      expect(elm.colision).to.be.equal(resultsWanted[index].colision)
    })
  })
})
