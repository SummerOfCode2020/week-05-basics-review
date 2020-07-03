/*
 Fix this code
 There are several bugs
 Fix code to calculate age correctly
*/
function getDogAge (dog) {
    let dogAge = 0

    if (dog) {
        let { age } = dog
        let dogAge = age + 7
    }

    return dogAge;
}

const pupper = {
    age: 2,
    name: 'Ubu'
}
const result = getDogAge(pupper)

// expect 14
console.log({ result })
