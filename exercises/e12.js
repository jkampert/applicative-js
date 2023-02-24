import { data } from "../data/data";

// SPACE DATA EXERCISE 12
// Return the sum of all moons for all planets
// Return example: 42

export function allPlanetsMoonsCount(data) {
    const planets = data.planets;
    const planetsWithMoons = planets.filter((planet) => planet.hasOwnProperty('moons'));
    const moonArr = planetsWithMoons.map((planet) => planet.moonsCount);
    const moonSum = moonArr.reduce((acc, num) => acc + num, 0);
    return moonSum;

    // OR
    // return data.planets.filter((planet) => planet.hasOwnProperty('moons'))
    //    .map((planet) => planet.moonsCount)
    //    .reduce((acc, num) => acc + num, 0);
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function