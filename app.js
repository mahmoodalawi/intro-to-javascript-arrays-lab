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

// Exercise 10

const foods = ['taco', 'sushi', 'cupcake', 'tofu', 'cheeseburger'];

const hasSoup = foods.includes('soup');

console.log('Exercise 10:', hasSoup);


// Exercise 11
 

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

const odds = [];

for (const num of nums) {
  if (num % 2 !== 0) {
    odds.push(num);
  }
}

console.log('Exercise 11:', odds);

// Exercise 12
// not sure how to complete this task

// const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

const fizz = [];
const buzz = [];
const fizzbuzz = [];

nums.forEach(num => {
  if (num % 3 === 0) {
    fizz.push(num);
  }
  
  
  if (num % 3 === 0 && num % 5 === 0) {
    fizzbuzz.push(num);
  }
});

console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);


// Exercise 13

const numArrays = [
    [100, 5, 23],
    [15, 21, 72, 9],
    [45, 66],
    [7, 81, 90]
  ];
  
  const numList = numArrays[numArrays.length - 1];
  
  console.log('Exercise 13:', numList);



// Exercise 14

const num = numArrays[2][1]; 

console.log('Exercise 14 result:

// Exercise 15
// As it's already declared 
// const numArrays = [
//     [100, 5, 23],
//     [15, 21, 72, 9],
//     [45, 66],
//     [7, 81, 90]
//   ];
  
  let total = 0; 
  

  numArrays.forEach(innerArray => {
    innerArray.forEach(number => {
      total += number;
    });
  });
  
  console.log('Exercise 15:\n', total);
