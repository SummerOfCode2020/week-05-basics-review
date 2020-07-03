/**
 * @TODO: Update the code so the `console.log` return expected results
 */

const theTerrificTwos = [
    "Respect the nap",
    "Stick to a schedule with meals",
    "Talk through triggers ahead of time"
]

/**
 * Return a specific step for handling two year olds
 */
function getStep (stepNumber) {
    // takes in a "normal" number that we use in normal speaking terms
    // but we have to translate that for the fussy computer to be zero-based
    const arrayIndex = stepNumber - 1;
    return theTerrificTwos[arrayIndex]
}

// kiddo acting fussier than the JavaScript engine?
const step1 = getStep(1)

// step 1 not enough? What is step 2?

// step 2 not enough? What is step 3?

// Expect 
// {
//   step1: 'Respect the nap',
//   step2: 'Stick to a schedule with meals',
//   step3: 'Talk through triggers ahead of time'
// }
console.log({step1, step2, step3})
