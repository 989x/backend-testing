function minEnergy(start: number, shops: number[], stations: number[], target: number): number {
  // Sort the shops and stations in ascending order
  shops.sort((a, b) => a - b);
  stations.sort((a, b) => a - b);

  let energy = 0;
  let currentPos = start;

  // Visit each shop and determine the energy needed to reach it
  for (const shop of shops) {
    const distance = Math.abs(shop - currentPos);
    const stationDistances = stations.map((station) => Math.abs(station - currentPos));

    // Find the nearest station
    const minStationDistance = Math.min(...stationDistances);
    const minStationIndex = stationDistances.indexOf(minStationDistance);
    const nearestStation = stations[minStationIndex];

    // Check if using a station is more energy-efficient
    if (2 * minStationDistance <= distance) {
      // Using a station is more energy-efficient
      energy -= distance; // Deduct walking energy
      energy += minStationDistance; // Add station energy
      // console.log(`Taking station from ${currentPos} to ${nearestStation}, energy used: ${minStationDistance}`);
      currentPos = nearestStation;
    } else {
      // Walk to the shop
      energy += distance; // Walking energy
      // console.log(`Walking from ${currentPos} to ${shop}, energy used: ${distance}`);
      currentPos = shop;
    }
  }

  // Calculate energy needed to reach the target from the last shop or station
  energy += Math.abs(target - currentPos);
  // console.log(`Walking from ${currentPos} to ${target}, energy used: ${Math.abs(target - currentPos)}`);

  return energy;
}

// Examples
const result = minEnergy(0, [4, 9], [3, 6, 8], 11);
console.log(`Total energy needed: ${result}`); // Output: 8
