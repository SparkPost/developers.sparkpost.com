import React from 'react'
import { keyBy } from 'lodash'
import plainSlugify from 'utils/slugify'
import Debug from 'components/api/Debug'
import Context from 'components/api/Context'
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
      <Context.Provider value={dataStructuresObject}>
        {title && (
          <Heading level={1} id={plainSlugify(title)}>
            {title}
          </Heading>
        )}
        {copy && <BlockMarkdown>{copy}</BlockMarkdown>}
        {resourceGroups.map((resourceGroup, i) => (
          <ResourceGroup key={i} resourceGroup={resourceGroup} />
        ))}
      </Context.Provider>
    </Debug>
  )
}
