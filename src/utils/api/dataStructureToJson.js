function renderBase(attribute) {
  // const key = attribute.key.toValue
  const type = attribute.id.toValue()
    ? attribute.id.toValue()
    : attribute.element
  const description = attribute.description && attribute.description.toValue()
  const value = attribute.toValue()

  return {
    type,
    description,
    value,
  }
}

// See https://github.com/apiaryio/mson/blob/master/MSON%20Specification.md#353-type-attribute
function renderTypeAttributes(member) {
  const typeAttributes =
    member.attributes && member.attributes.get('typeAttributes')
  const valueAttributes = member.value.attributes

  const properties = {
    ...valueAttributes.toValue(),
    required: typeAttributes ? typeAttributes.contains('required') : false,
  }

  if (valueAttributes.get('enumerations')) {
    properties.enumerations = valueAttributes
      .get('enumerations')
      .map(enumeration => ({
        type: enumeration.element,
        value: enumeration.toValue(),
      }))
  }

  return properties
}

function renderAttribute(attribute, dataStructures) {
  switch (attribute.element) {
    /**
     * Primitive Types
     */
    case 'boolean':
      return renderBase(attribute)
      break

    case 'string':
      return renderBase(attribute)
      break

    case 'number':
      return renderBase(attribute)
      break

    /**
     * Structure Types
     */
    case 'object':
      return {
        ...renderBase(attribute),
        children: attribute.map((value, key, member) =>
          renderMember(member, dataStructures)
        ),
      }
      break

    case 'array':
      return renderBase(attribute)
      break

    case 'enum':
      return renderBase(attribute)
      break

    /**
     * Other types - dereference if we can
     */
    default:
      if (dataStructures) {
        const dataStructure = dataStructures.find(dataStructure => {
          return (
            attribute.element.toLowerCase() ===
            dataStructure.content.id.toValue().toLowerCase()
          )
        })

        if (dataStructure) {
          return {
            ...renderBase(attribute),
            type: 'object',
            children: dataStructureToJson(dataStructure),
          }
        }
      }
      return renderBase(attribute)
      break
  }
}

function renderMember(member, dataStructures) {
  return {
    ...renderTypeAttributes(member),
    ...renderAttribute(member.value, dataStructures),
    name: member.key.toValue(),
    description: member.description.toValue(),
  }
}

function dataStructureToJson(dataStructure, dataStructures) {
  return dataStructure.content.map((value, key, member) =>
    renderMember(member, dataStructures)
  )
}

export default dataStructureToJson
