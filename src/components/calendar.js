import React, {Component} from 'react'
import moment from 'moment'
import Evenement from './evenement'
import Patern from './patern'


class Calendar extends Component {
  render () {
    const hourArray = Array(13).fill(1).map((elm, index) => {
      const hour = (index * 60)
      return {diff: hour, hour: 9 + index}
    })
    return (
      <div style={{display:'flex', position: 'relative'}}>
      <div>{
        hourArray.map(elm => {
          return <div>
            <span className='hour' style={{ position: 'absolute',top: ` ${-8 +elm.diff}px`, left: '-65px'}}>{`${moment().hour(elm.hour).minute(0).format('hh:mm A')} -`}</span>
            <span  className='hour' style={{ position: 'absolute',top: `${-6 +elm.diff + 30}px`,  left: '-25px', fontSize: '10px'}}>{`${moment().hour(elm.hour).minute(30).format('hh:mm')} -`}</span>

          </div>
        })
      }</div>
      <div className='calendar'>
        {
          Object.keys(this.props.elements).map((key,index) => {
            const elm = this.props.elements[key]
            const purcentTT =  elm.end - elm.start
            const colision = elm.colision ? +elm.colision.split('C')[1] : ''
            const widthElm = elm.colision ? 1 / elm.numberOfColisition * 100 - 2 : 94
            const leftElm = elm.colision ? 100 - (colision / elm.numberOfColisition * 100) : 0
            return <div
            className='element'
            style={{
              height: `${purcentTT}px`,
              left: `${leftElm}%`,
              marginLeft: `${colision === 1 ? '0px': '2%' }`,
              top: `${elm.start}px`,
              width: `${widthElm}%`
            }}
            >
              <div className='blue'></div>
            </div>
          })
        }
      </div>
      </div>
    )
  }
}

Calendar.defaultProps = {
  elements: {},
}


export default Calendar
/**        {
          hourArray.map(elm => {
            return (
              <div>
                <Evenement evenementFind={this.props.elements[elm]} hourOfEvenement={elm}/>
              </div>
            )
          })
        }**/
