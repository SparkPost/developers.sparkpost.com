import { DESCRIPTIONS, NAMES, CATEGORIES } from './constants'

const parseEvent = (event) => {
  const { type } = event

  return {
    name: NAMES[type],
    description: DESCRIPTIONS[type],
    timestamp: Date.now(),
    data: event,
  }
}

export default parseEvent
