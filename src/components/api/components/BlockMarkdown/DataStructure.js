import React, { Fragment } from 'react'
import DataStructureContext from 'components/api/DataStructureContext'
import DataStructureComponent from 'components/api/parts/DataStructure'
import HttpHeading from '../HttpHeading'
import Right from '../Right'
import Json from '../Json'
import Row from '../Row'

function DataStructure({ id, title, sample }) {
  return (
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
              <DataStructureComponent
                title={title}
                dataStructure={dataStructures[id.toLowerCase()]}
              />
            </div>
          </Wrapper>
        )
      }}
    </DataStructureContext.Consumer>
  )
}

export default DataStructure
