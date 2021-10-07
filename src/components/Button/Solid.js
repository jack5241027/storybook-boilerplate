import React from 'react'
import styled from 'styled-components'

const StyledComponent = styled.button`
  background-color: ${props => {
    return props.theme.colors.primary.accent.base
  }};
  cursor: pointer;
`

const SolidButton = () => <StyledComponent>Solid</StyledComponent>

export default SolidButton
