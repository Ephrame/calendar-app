import React, { Component } from 'react'
import PropTypes from 'prop-types'
import isEqual from 'lodash/isEqual'

class ListEvenements extends Component {
  shouldComponentUpdate (newProps) {
    if(!isEqual(newProps.evenements, this.props.evenements)) {
      return true
    }
    return false
  }
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
              key={key}
              style={{
                height: `${purcentTT}px`,
                left: `${leftElm}%`,
                marginLeft: `${colision === 1 ? '0px' : '1%'}`,
                top: `${elm.start}px`,
                width: `${widthElm}%`
              }}
              >
              <div className='list-evenement__element__decor' />
              <div className='list-evenement__element__comment' >
                <span className='list-evenement__element__comment__primary-text'>Sample Item</span>
                <span className='list-evenement__element__comment__secondary-text'>Sample location</span>
              </div>
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
