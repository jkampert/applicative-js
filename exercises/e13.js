import { data } from "../data/data";

// SPACE DATA EXERCISE 13
// Return the average temperature of all the Planets
// Return example: 132.53

export function getAveragePlanetsTemperature(data) {
    const planets = data.planets;
    const planetTemps = planets.map((planet) => planet.avgTemp);
    const tempSum = planetTemps.reduce((acc, num) => acc + num, 0);
    return tempSum / planets.length;
    // OR
    // return (data.planets.map((planet) => planet.avgTemp)
    //   .reduce((acc, num) => acc + num, 0)) / data.planets.length;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function