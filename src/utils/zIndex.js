const indexMap = {
  tooltip: 1000,
  header: 1010,
  overlay: 1020,
}

function zIndex(z) {
  if (!indexMap[z]) {
    console.log(`Index ${z} undefined`)
  }

  return indexMap[z]
}

export default zIndex
