import React, { Fragment } from 'react'
import DataStructureContext from 'components/api/DataStructureContext'
import DataStructure from 'components/api/parts/DataStructure'
import HttpHeading from '../HttpHeading'
import Right from '../Right'
import Json from '../Json'
import Row from '../Row'

/**
 * DON'T HOW THIS GETS EXPORTED AND NAMED
 *
 * Name the components to valid remark custom component names.
 * The name gets used as the component (`<data-structure></data-structure>`) and
 * is also used correctly rendering paragraphs vs custom components in the hasComponent
 * function.
 */
const component = {}
component['data-structure'] = ({ id, title, sample }) => (
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

export default component
