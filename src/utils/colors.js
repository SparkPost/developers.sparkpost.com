/*
 * SparkPost Brand Colors 🖌
 * Usage: background: color(orange);
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

  // Alert
  alert: '#f00a0a',

  // Hovers
  orangeDark: '#e9591b',
  blueDark: '#2693c3',
}

/*
 * Grayscale Map
 * Usage: background: grayscale(1);
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
 * Outputs breakpoint value 📱
 * Usage: @media screen and (min-width: break(md)) { ... }
 */
const breakpointMap = {
  sm: '450px', // 30em,
  md: '720px', // 48em,
  lg: '960px', // 64em,
  xl: '1200px', // 80em,
  xxl: '1470px', //98em,
}

/*
 * Outputs box shadow 🆒
 * Usage: box-shadow: shadow(2);
 * Concatenates all shodows below selected level.
 * shadow(3) will output 1, 2, and 3 together.
 */
const shadowMap = {
  1: '0px 1px 2px rgba(#414146, 0.1)',
  2: '0px 5px 9px rgba(#414146, 0.14)',
  3: '0px 10px 30px rgba(#414146, 0.16)',
}

function color(c) {
  if (!colorMap[c]) {
    console.log('Color ${c} undefined')
  }

  return colorMap[c]
}

function grayscale(i) {
  if (!grayscaleMap[i]) {
    console.log('Grayscale ${i} undefined')
  }

  return grayscaleMap[i]
}

function breakpoint(size) {
  if (!breakpointMap[size]) {
    console.log('Breakpoint ${size} undefined')
  }

  return breakpointMap[size]
}

function shadow(level) {
  let boxShadow = shadowMap[1]

  if (!shadowMap[level]) {
    console.log('Shadow ${level} undefined')
  }

  if (level > 1) {
    for (let i = 2; i <= level; i++) {
      boxShadow += ' ' + shadowMap[i]
    }
  }

  return boxShadow
}

export { color, grayscale, breakpoint, shadow }
