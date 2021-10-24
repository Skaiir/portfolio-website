export const yearsOfDev = () => {
  var delta = new Date(Date.now() - new Date(2018, 8))
  return delta.getUTCFullYear() - 1970
}

export const readablePrecision = (x, n) => x.toFixed(n).replace(/\.?0*$/, '')
