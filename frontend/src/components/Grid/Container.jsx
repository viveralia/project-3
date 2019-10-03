import React from 'react'
import styled from 'styled-components'

/*************************/
/********* CSS ***********/
/*************************/
const StyledContainer = styled.section`
  padding: 1rem 1.5rem;
  max-width: ${props => (props.type === 'full' ? '100%' : 'var(--maxWidth)')};
  margin: 0 auto;
`

/*************************/
/********* JSX ***********/
/*************************/
const Container = ({ children, type }) => {
  return <StyledContainer type={type}>{children}</StyledContainer>
}

export default Container
