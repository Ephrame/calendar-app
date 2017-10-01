import React, {Component} from 'react'
import moment from 'moment'
import Evenement from './evenement'
import Patern from './patern'


class Calendar extends Component {
  render () {
    const hourArray = Array(13).fill(1).map((elm, index) => {
      const hour = 9 + index
      return hour
    })
    return (
      <div className='calendar'>
        {
          hourArray.map(elm => {
            return (
              <div>
                <Evenement evenementFind={this.props.elements[elm]} hourOfEvenement={elm}/>
              </div>
            )
          })
        }
      </div>
    )
  }
}

Calendar.defaultProps = {
  elements: {}
}
export default Calendar
