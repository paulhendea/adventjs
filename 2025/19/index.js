/**
 * @param {string[][]} routes - Array of [origin, destination] pairs
 * @returns {string[]} The reconstructed route
 */
function revealSantaRoute(routes) {
  if (routes.length <= 0) return []
  
  const routeMap = new Map(routes)
  let currentLocation = routes[0][0]
  const finalRoute = [currentLocation]
  while(true) {
    if (!routeMap.has(currentLocation)) break
    const nextLocation = routeMap.get(currentLocation)
    finalRoute.push(nextLocation)
    currentLocation = nextLocation
  }
  return finalRoute
}

const result1 = revealSantaRoute([
  ['MEX', 'CAN'],
  ['UK', 'GER'],
  ['CAN', 'UK']
])
console.log(result1)
// → ['MEX', 'CAN', 'UK', 'GER']

const result2 = revealSantaRoute([
  ['USA', 'BRA'],
  ['JPN', 'PHL'],
  ['BRA', 'UAE'],
  ['UAE', 'JPN'],
  ['CMX', 'HKN']
])
console.log(result2)
// → ['USA', 'BRA', 'UAE', 'JPN', 'PHL']

const result3 = revealSantaRoute([
  ['STA', 'HYD'],
  ['ESP', 'CHN']
])
console.log(result3)
// → ['STA', 'HYD']