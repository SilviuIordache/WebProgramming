const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

//arrow notation
fruits.forEach(fruitToEat => console.log(`I want to eat a ${fruitToEat}`));

console.log('\n');


//function declaration
function printFruitToEat(fruitToEat){
  console.log(`I want to eat a ${fruitToEat}`);
}
fruits.forEach(printFruitToEat);
console.log('\n');


//callbackFunction
fruits.forEach(function(fruitToEat) {console.log(`I want to eat a ${fruitToEat}`)});
console.log('\n');

