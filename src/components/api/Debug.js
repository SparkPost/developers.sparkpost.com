import React, { Fragment } from 'react'
import styled from 'styled-components'

const DebugTitle = styled.div`
  display: block;
  border-radius: 5px 5px 0 0;
  border: 1px solid blue;
  border-bottom-color: white;
  transform: translateY(-100%);
  position: absolute;
  top: 0;
  left: -1px;
  padding: 0.25rem;
`

const Debug = styled.div`
  border-radius: 0 5px 5px 5px;
  border: 1px solid blue;
  margin: 2rem 1rem 1rem;
  padding: 0.5rem;
`

export default ({ title, children }) =>
  false ? (
    <Debug>
      <DebugTitle>{title}</DebugTitle>
      {children}
    </Debug>
  ) : (
    <Fragment>{children}</Fragment>
  )
