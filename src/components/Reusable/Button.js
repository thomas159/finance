import styled from 'styled-components'
import * as palette from '../../variables'

const Button = styled.button`
  margin: 20px 0 10px 0;
  border: 0;
  padding: 0;
  outline: 0;
  padding: 10px;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-transform: capitalize;
  letter-spacing: 3px;
  background: ${palette.blue};
  cursor: pointer;
  &:hover, focus {
    transition: all 0.25s ease;
    background: ${palette.blue};
  }
`

export default Button
