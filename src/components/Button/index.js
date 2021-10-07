import React from 'react'
import PropTypes from 'prop-types'
import Flat from './Flat'
import Outline from './Outline'
import Solid from './Solid'

const getComponentFromType = type =>
  ({
    flat: Flat,
    outline: Outline,
    solid: Solid,
  }[type])

const Button = ({ text, buttonType, ...props }) => {
  const Components = getComponentFromType(buttonType)
  return <Components {...props}>{text}</Components>
}

Button.defaultProps = {
  type: 'button',
  buttonType: 'solid',
  shape: 'rounded',
  level: 'primary',
}

Button.propTypes = {
  type: PropTypes.string,
  buttonType: PropTypes.oneOf(['flat', 'outline', 'solid']),
}

export default Button
