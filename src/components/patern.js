import React, {Component} from 'react'
import moment from 'moment'
class Patern extends Component {
  render () {
    const minuteToHour = Array(60).fill(2)
    const referenceHour = moment().hour(this.props.hourOfEvenement)

    return (
      <div className='evenement'>
        <span>{`${this.props.hourOfEvenement} h : `}</span>
      </div>
    )
  }
}

Patern.defaultProps = {
  elements: {},
  evenementFind: []
}
export default Patern
