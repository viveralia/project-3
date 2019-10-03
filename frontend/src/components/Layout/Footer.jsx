import React from 'react'
import styled from 'styled-components'
import { name } from '../../constants/meta.json'

/*************************/
/********* CSS ***********/
/*************************/
const StyledFooter = styled.footer`
  text-align: center;
  padding: 1rem 1.5rem;
  border-top: var(--border);
  margin-top: auto;
`

/*************************/
/********* JSX ***********/
/*************************/
const Footer = () => {
  return (
    <StyledFooter>
      <small>&copy; {`${name} ${new Date().getFullYear()}`}</small>
    </StyledFooter>
  )
}

export default Footer
