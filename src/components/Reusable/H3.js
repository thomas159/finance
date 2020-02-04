import styled from 'styled-components'
import React from 'react'

const StyledH3 = styled.h3`
  font-size: 20px;
  text-align: ${props => props.textAlign === 'right' ? 'right' : 'left' };
`
const H3 = ({children, textAlign}) => (
  <StyledH3 textAlign={textAlign}>{children}</StyledH3>
)

export default H3
