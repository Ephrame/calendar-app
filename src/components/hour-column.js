import React from 'react'
import moment from 'moment'

export function HourColumn (props) {
  const hourArray = Array(12).fill(1).map((elm, index) => {
    const hour = index * 60
    return { diff: hour, hour: 9 + index }
  })
  return (
    <div>
      {hourArray.map(elm => {
        return (
          <div key={elm.hour}>
            <span
              className='calendar__hour-column__hour'
              style={{ top: ` ${-8 + elm.diff}px` }}
              >
              {`${moment().hour(elm.hour).minute(0).format('hh:mm A')} -`}
            </span>
             <span
              className='calendar__hour-column__half-hour'
              style={{ top: `${-6 + elm.diff + 30}px` }}
              >
              {`${moment().hour(elm.hour).minute(30).format('hh:mm')} -`}
            </span>
          </div>
        )
      })}
      <div key={21}>
        <span
          className='calendar__hour-column__hour'
          style={{ top: ` ${-8 + 12*60}px` }}
          >
          {`${moment().hour(21).minute(0).format('hh:mm A')} -`}
        </span>
      </div>
    </div>
  )
}
