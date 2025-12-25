/**
 * @param {string[][]} routes - Array of [origin, destination] pairs
 * @returns {string[]} The reconstructed route
 */
export function revealSantaRoute(routes) {
  if (routes.length <= 0) return [];

  const routeMap = new Map(routes);
  let currentLocation = routes[0][0];
  const finalRoute = [currentLocation];
  while (true) {
    if (!routeMap.has(currentLocation)) break;
    const nextLocation = routeMap.get(currentLocation);
    finalRoute.push(nextLocation);
    currentLocation = nextLocation;
  }
  return finalRoute;
}
