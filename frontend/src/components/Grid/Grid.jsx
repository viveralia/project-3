import React from 'react'
import styled from 'styled-components'

/*************************/
/********* CSS ***********/
/*************************/
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.sm && `repeat(${props.sm}, 1fr)`};
  grid-gap: ${props => props.spacing};
  align-items: center;
  @media (min-width: 992px) {
    grid-template-columns: ${props => props.md && `repeat(${props.md}, 1fr)`};
  }
`

/*************************/
/********* JSX ***********/
/*************************/
const Grid = ({ children, sm, md, spacing }) => {
  return (
    <StyledGrid sm={sm} md={md} spacing={spacing}>
      {children}
    </StyledGrid>
  )
}

export default Grid
