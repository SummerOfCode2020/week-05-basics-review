/**
 * @TODO: Complete the code to add a step to the list
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
 * Return an updated list of steps after appending to the list
 */
const addStep = (step) => {
    return theTerrificTwos
}

// When 3 steps won't do it, surely the 4th step will restore calm
const allSteps = addStep("Don’t cave in.")

// Expect 'Don’t cave in.' to be the new item at the end
// {
//   allSteps: [
//     'Respect the nap',
//     'Stick to a schedule with meals',
//     'Talk through triggers ahead of time',
//     'Don’t cave in.'
//   ]
// }
console.log({allSteps})
