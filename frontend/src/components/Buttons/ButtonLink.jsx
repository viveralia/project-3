import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

/*************************/
/********* CSS ***********/
/*************************/
const StyledButtonLink = styled(Link)`
  background: ${props => (props.type === 'primary' ? 'var(--black)' : 'transparent')};
  color: ${props => (props.type === 'primary' ? '#fff' : 'var(--black)')};
  padding: 0.5rem 1.571rem;
  font-size: 0.8125rem;
  text-transform: uppercase;
  font-weight: 500;
  border: ${props => (props.type !== 'primary' ? '2px solid var(--black)' : '2px solid var(--black)')};
  transition: all 0.175s ease;
  display: inline-block;
  position: relative;
  ::after {
    content: '';
    position: absolute;
    z-index: -1;
    top: -2px;
    left: -2px;
    width: 100%;
    height: 100%;
    border: 2px solid var(--black);
    opacity: 0;
    transition: opacity 0.175s ease;
  }
  :hover,
  :focus {
    background: ${props => (props.type !== 'primary' ? 'var(--black)' : '#eee')};
    color: ${props => (props.type !== 'primary' ? '#fff' : 'var(--black)')};
    ::after {
      opacity: 1;
    }
  }
  @media (min-width: 992px) {
    padding: 0.675rem 1.78571rem;
  }
`

/*************************/
/********* JSX ***********/
/*************************/
const ButtonLink = ({ title, type, to }) => {
  return (
    <StyledButtonLink type={type} to={to}>
      {title}
    </StyledButtonLink>
  )
}

export default ButtonLink
