import React, {Component} from 'react'
import PropTypes from 'prop-types'

import ListEvenements from './list-evenement'
import {HourColumn} from './hour-column'

import {transformSlot} from '../normalizer'

class Calendar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      evenements: transformSlot(props.elements).newElements
    }
  }
  componentWillReceiveProps (newProps, props) {
    // To Do diff to render
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
