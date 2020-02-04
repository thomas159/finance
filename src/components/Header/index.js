import React from 'react'
import styled from 'styled-components'
import * as palette from '../../variables'

const Wrap = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  height: 50px;
  background: ${palette.darkTransparent};
  color: #fff;
  justify-items: center;
`

const Nav = styled.ul`
  display: grid;
  height: 100%;
  min-width: 200px;
  grid-template-columns: 33% 33% 33%;
  justify-items: center;
  align-items: center;
`

const NavItem = styled.li`
  background: #fff;
  height: 100%;
  width: 100%;
`

const StyledLink = styled.a`
  display: grid;  
  height: 100%;
  width: 100%;
  cursor: pointer;
  justify-items: center;
  align-items: center;
  text-decoration: none;
  color: ${palette.darkGrey};
  &:hover, focus{
    color: #fff;
    background: ${palette.lightGrey};
  }
`
const Title = styled.div`
  position: absolute;
  display: flex;
  height: 40px;
  top: 5px;
  left: 20px;
  align-items: center;
  color: #fff;
`

const Header = () => (
  <Wrap>
    <Title>Finance</Title>
    <Nav>
      <NavItem>
        <StyledLink to="/">
          Link 1
        </StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to="task2">
          Link 2
        </StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to="task3">
          Link 3
        </StyledLink>
      </NavItem>
    </Nav>
  </Wrap>
)

export default Header