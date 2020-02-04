import styled from 'styled-components'
import React from 'react'

const StyledH2 = styled.h2`
  font-size: 24px;
  transform: uppercase;
  letter-spacing: 3px;
  text-align: center;
  padding: 20px 0 0 0;
  margin: 0;
`
const H2 = ({children}) => (
  <StyledH2>{children}</StyledH2>
)

export default H2