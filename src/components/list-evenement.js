import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListEvenements extends Component {
  render () {
    return (
      <div className='list-evenement'>
        {Object.keys(this.props.evenements).map((key, index) => {
          const elm = this.props.evenements[key]
          const purcentTT = elm.end - elm.start
          const colision = elm.colision ? +elm.colision.split('C')[1] : ''
          const widthElm = elm.colision ? 1 / elm.numberOfColisition * 100 - 2 : 94
          const leftElm = elm.colision ? 100 - colision / elm.numberOfColisition * 100 : 0
          return (
            <div
              className='list-evenement__element'
              key={elm.end + elm.start}
              style={{
                height: `${purcentTT}px`,
                left: `${leftElm}%`,
                marginLeft: `${colision === 1 ? '0px' : '2%'}`,
                top: `${elm.start}px`,
                width: `${widthElm}%`
              }}
              >
              <div className='list-evenement__element__decor' />
            </div>
          )
        })}
      </div>
    )
  }
}

ListEvenements.defaultProps = { evenements: {} }
ListEvenements.propTypes = {
  evenements: PropTypes.objectOf(
    PropTypes.shape({
      start: PropTypes.number.isRequired,
      numberOfColisition: PropTypes.number,
      colision: PropTypes.string,
      end: PropTypes.number.isRequired
    })
  )
}
export default ListEvenements
