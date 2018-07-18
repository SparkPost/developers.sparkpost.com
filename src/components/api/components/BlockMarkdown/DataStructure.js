import React, { Fragment } from 'react'
import DataStructureContext from 'components/api/DataStructureContext'
import DataStructure from 'components/api/parts/DataStructure'
import HttpHeading from '../HttpHeading'
import Right from '../Right'
import Json from '../Json'
import Row from '../Row'

export default ({ id, title, sample }) => (
  <DataStructureContext.Consumer>
    {dataStructures => {
      const Wrapper = sample !== undefined ? Row : Fragment
      return (
        <Wrapper>
          {sample !== undefined && (
            <Right>
              <HttpHeading top>Example</HttpHeading>
              <Json>{unescape(sample)}</Json>
            </Right>
          )}
          <div className="block">
            <DataStructure
              title={title}
              dataStructure={dataStructures[id.toLowerCase()]}
            />
          </div>
        </Wrapper>
      )
    }}
  </DataStructureContext.Consumer>
)
