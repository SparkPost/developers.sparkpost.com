import { rgba } from 'polished'

/*
 * SparkPost Fonts ⌨
 */
const fontMap = {
  primary: `'Gotham Narrow SSm A', 'Gotham Narrow SSm B', 'Helvetica', sans-serif`,
  secondary: `'Gotham SSm A', 'Gotham SSm B', 'Helvetica', sans-serif`,
  monospace: 'Source Code Pro, monospace',

  primary: `'Gotham Narrow', 'Helvetica', sans-serif`,
  secondary: `'Gotham', 'Helvetica', sans-serif`,
}

/*
 * SparkPost Font weights ⚖
 */
const weightMap = {
  light: 300,
  normal: 400,
  medium: 500,
  bold: 600,
}


function font(f) {
  if (!fontMap[f]) {
    console.log(`Font ${c} undefined`)
  }

  return fontMap[f]
}

function weight(w) {
  if (!weightMap[w]) {
    console.log(`Weight ${c} undefined`)
  }

  return weightMap[w]
}

const uppercase = `
  font-family: ${font('secondary')};
  font-weight: 400;
  text-transform: uppercase;
`

const monospace = `
  -webkit-font-smoothing: initial;
  font-family: ${font('monospace')};
  font-size: 85%;
  font-weight: 400;
`

export { font, weight, uppercase, monospace }
