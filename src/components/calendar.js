import React, {Component} from 'react'
import PropTypes from 'prop-types'

import ListEvenements from './list-evenement'
import {HourColumn} from './hour-column'

import {transformSlot} from '../normalizer'
import { addDayEmitter } from '../index.js'


class Calendar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      evenements: transformSlot(props.elements).newElements
    }
  }
  componentWillMount () {
    addDayEmitter.on('transformDays', newElms => {
      this.setState({evenements: transformSlot(newElms).newElements})
    })

    addDayEmitter.on('addDays', newElms => {
      this.setState({evenements: transformSlot([...this.props.elements, ...newElms]).newElements})
    })
  }
  render () {
    return (
      <div className='calendar'>
        <HourColumn />
        <div className='calendar__content'>
          <ListEvenements evenements={this.state.evenements} />
        </div>
      </div>
    )
  }
}

Calendar.defaultProps = {
  elements: {}
}
Calendar.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      start: PropTypes.number.isRequired,
      end: PropTypes.number.isRequired
    })
  )
}

export default Calendar
