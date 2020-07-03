/**
 * @TODO: Rewrite the function to be an arrow function
 *
 * For help, reference https://www.w3schools.com/js/js_arrow_function.asp
 * 
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

// Expect 
// {
//   step1: 'Respect the nap'
// }
console.log({step1})
