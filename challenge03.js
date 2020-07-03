/*
 Fix this code by using an arrow function. Don't use the `function` keyword
*/
 (dog) {
    let dogAge = 0
    let { age } = dog
    let dogAge = age * 7
    
    return dogAge;
}

const pupper = {
    age: 2,
    name: 'Ubu'
}
const result = getDogAge(pupper)

// expect 14
console.log({ result })
