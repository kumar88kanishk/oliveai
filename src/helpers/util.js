export function queryString(params) {
  return Object.keys(params).map((key) => {
    return {
      [key]: params[key]
    }
  }).reduce((acc, item) => {
    return acc + Object.keys(item)[0] + '=' + Object.values(item)[0] + '&'
  }, '?').slice(0, -1)
}