export const yearsOfDev = () => {
  var delta = new Date(Date.now() - new Date(2018, 8))
  return delta.getUTCFullYear() - 1970
}
