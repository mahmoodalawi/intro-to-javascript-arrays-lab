// Exercise 1 from the site  

const foods = [];  

console.log('Exercise 1 result:', foods);

// Exercise 2 with push 
const foods = [];

foods.push('pizza' , 'cheeseburger');

console.log('Exercise 2 :', foods);

// Exercise 3
const foods = [];

foods.unshift('taco');

console.log('Exercise 3 :', foods);


// Exercise 4

const foods = ['taco', 'pizza', 'cheeseburger'];

const favFood = foods[1];

console.log('Exercise 4:', favFood);

// Exercise 5

const foods = ['pizza', 'cheeseburger'];


foods.splice(1, 0, 'tofu');

console.log('Exercise 5 result:', foods);

const foods = ['pizza', 'cheeseburger'];

// Exercise 6

foods.splice(0, 1, 'sushi', 'cupcake');

console.log('Exercise 6:', foods); 

// Exercise 7

const food = ['sushi', 'cupcake'];
const yummy = food.slice();
console.log('Exercise 7:', yummy);

// Exercise 8

const foods = ['sushi', 'cupcake', 'tofu'];

const soyIdx = foods.indexOf('tofu');

console.log('Exercise 8:', soyIdx);

// Exercise 9

const foods = ['taco', 'sushi', 'cupcake', 'tofu', 'cheeseburger'];

const allFoods = foods.join(' -> ');

console.log('Exercise 9:', allFoods);
