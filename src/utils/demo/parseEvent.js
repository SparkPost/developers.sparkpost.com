import { DESCRIPTIONS, NAMES, CATEGORIES } from './constants'

const parseEvent = ({ category, source, data }) => {
  const { type } = data

  return {
    name: NAMES[type],
    description: DESCRIPTIONS[type],
    category: CATEGORIES[category],
    source,
    data,
  }
}

export default parseEvent
