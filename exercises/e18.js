import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  const asteroids = data.asteroids;
  const counts = {};
  let maxYear;
  let maxCount = 0;
  
  for (const asteroid of asteroids) {
    const year = asteroid.discoveryYear;
    if (counts[year]) {
      counts[year]++;
    } else {
      counts[year] = 1;
    }
    if (counts[year] > maxCount) {
      maxYear = year;
      maxCount = counts[year];
    }
  }
  
  return maxYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
