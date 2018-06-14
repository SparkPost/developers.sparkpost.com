import { isEmpty, first, keyBy, mapValues } from 'lodash'
import dataStructureToJson from './dataStructureToJson'

function buildSample(jsonArray) {
  return mapValues(keyBy(jsonArray.map(({
    name, type, value, samples, children, enumerations
  }) => {
    if (type === 'object') {
      return {
        name,
        value: buildSample(children)
      }
    }

    return {
      name,
      // use value, first sample, or first enum value
      value: !isEmpty(value) && value || first(samples) || first(enumerations)
    }
  }), 'name'), 'value')
}

export default function generateSample(dataStructure, dataStructures) {
  const jsonArray = dataStructureToJson(dataStructure, dataStructures)

  return JSON.stringify(buildSample(jsonArray), null, 2)
}