import React, {Component} from 'react'
import moment from 'moment'
class Evenement extends Component {
  render () {
    const minuteToHour = Array(60).fill(2)
    const referenceHour = moment().hour(this.props.hourOfEvenement)
    const widthLength = this.props.evenementFind.length
    return (
      <div className='evenement'>
        {
          this.props.evenementFind.map((elm, index) => {
            const tt = elm.diffMinute[1] - elm.diffMinute[0]
            const purcentTT = tt / 60 * 100
            return (
              <div className='element' style={{display: 'flex',
                height: `${purcentTT}%`,
                postion: 'relative',
                top: `${elm.diffMinute[0]}px`,
                backgroundColor : `${index === 0 ? 'red' : 'blue'}`,
                width: `${100 / widthLength}%`
              }}>
                lala
              </div>
            )
          })
        }
      </div>
    )
  }
}

Evenement.defaultProps = {
  elements: {},
  evenementFind: []
}
export default Evenement

/**        {
          minuteToHour.map((elm, index) => {
            const minute = index + 1
           const toRender = (this.props.evenementFind[0] && minute >= this.props.evenementFind[0].diffMinute[0]
           && minute <= this.props.evenementFind[0].diffMinute[1]) ? "1" : "O"
           return <div style={{display: 'flex'}}>
           <span>{minute}</span>{toRender}
           </div>
          })
        }**/
