import { rgba } from 'polished'

/*
 * SparkPost Brand Colors 🖌
 */
const colorMap = {
  // Primary
  gray: '#55555a',
  orange: '#fa6423',
  blue: '#37aadc',

  // Secondary
  green: '#9bcd5a',
  magenta: '#b94696',
  mustard: '#e3af00',
  teal: '#0097b3',
  red: '#f00a0a',

  // Hovers
  orangeDark: '#e9591b',
  blueDark: '#2693c3',
}

/*
 * Grayscale Map
 */
const grayscaleMap = {
  0: '#000000',
  1: '#414146',
  2: '#55555a',
  3: '#6e6e73',
  4: '#828287',
  5: '#aaaaaf',
  6: '#bebec3',
  7: '#d2d2d7',
  8: '#e1e1e6',
  9: '#f2f2f5',
  10: '#ffffff',

  // Primary Grays
  black: '#000000',
  dark: '#414146',
  medium: '#55555a',
  light: '#f2f2f5',
  white: '#ffffff',
}

/*
 * Outputs box shadow 🆒
 */
const shadowMap = {
  1: `0px 1px 2px ${rgba(grayscale('dark'), 0.1)}`,
  2: `0px 5px 9px ${rgba(grayscale('dark'), 0.14)}`,
  3: `0px 10px 30px ${rgba(grayscale('dark'), 0.16)}`,
}

function color(c) {
  if (!colorMap[c]) {
    console.log(`Color ${c} undefined`)
  }

  return colorMap[c]
}

function grayscale(i) {
  if (!grayscaleMap[i]) {
    console.log(`Grayscale ${i} undefined`)
  }

  return grayscaleMap[i]
}

function shadow(level) {
  if (!shadowMap[level]) {
    console.log(`Shadow ${level} undefined`)
  }

  return shadowMap[level]
}

export { color, grayscale, shadow }
