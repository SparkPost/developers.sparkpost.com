import React from 'react'
import { keyBy } from 'lodash'
import plainSlugify from 'utils/slugify'
import Debug from 'components/api/Debug'
import DataStructureContext from 'components/api/DataStructureContext'
import { Heading, BlockMarkdown } from 'components/api/components'
import ResourceGroup from './ResourceGroup'

export default function API({ api }) {
  // we don't seem to use these since we just have a single resource group
  const title = api.title.toValue()
  const copy = api.copy.toValue()
  const resourceGroups = api.resourceGroups
  const dataStructures = api.dataStructures.first
    ? api.dataStructures.first.content
    : null

  const dataStructuresObject = keyBy(dataStructures, dataStructure => {
    return dataStructure.content.id.toValue().toLowerCase()
  })

  return (
    <Debug title="API">
      <DataStructureContext.Provider value={dataStructuresObject}>
        {title && (
          <Heading className="block" level={1} id={plainSlugify(title)}>
            {title}
          </Heading>
        )}
        {copy && <BlockMarkdown>{copy}</BlockMarkdown>}
        {resourceGroups.map((resourceGroup, i) => (
          <ResourceGroup key={i} resourceGroup={resourceGroup} />
        ))}
      </DataStructureContext.Provider>
    </Debug>
  )
}
