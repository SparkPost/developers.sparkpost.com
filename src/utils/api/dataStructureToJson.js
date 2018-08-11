function getType(attribute) {
  return attribute.id.toValue() ? attribute.id.toValue() : attribute.element
}

function renderBase(attribute) {
  const type = getType(attribute)
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
      .map(enumeration => {
        if (enumeration.element === 'object') {
          return renderAttribute(enumeration)
        } else {
          return {
            type: enumeration.element,
            value: enumeration.toValue(),
          }
        }
      })
  }

  return properties
}

function renderAttribute(attribute, dataStructures) {
  const type = getType(attribute)

  switch (type) {
    /**
     * Primitive Types
     */
    case 'boolean':
      return renderBase(attribute)

    case 'string':
      return renderBase(attribute)

    case 'number':
      return renderBase(attribute)

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

    case 'array':
      return renderBase(attribute)

    case 'enum':
      return renderBase(attribute)

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
  }
}

function renderMember(member, dataStructures) {
  // if we have a title, it should be used as the type
  if (member.title) {
    member.value.id.set(member.title.toValue())
  }

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
