// const numbers = [1, 2, 3, 4, 5];

// const newArray = numbers.map((entry) => entry * 2);

// console.log(newArray);

// const words = ["hello", "world", "javascript"];
// console.log(words.map((entry) => entry.toUpperCase()));

// const people = [
//   { name: "Alice", age: 25 },

//   { name: "Bob", age: 30 },

//   { name: "Charlie", age: 35 },
// ];
// console.log(people.map((entry) => entry.name));

//const items = ["Home", "About", "Contact"];
//console.log(items.map((entry) => `<li> ${entry} </li>`));
//Assisted by: Tony

// Task: Write a function that takes an array of product objects and returns a new array where the price of each product is increased by 10%. 


// const products = [ 

//     { name: "Laptop", price: 1000 }, 
  
//     { name: "Phone", price: 500 }, 
  
//     { name: "Tablet", price: 300 } 
  
//   ]; 

// //   ({}) = Object 
  
// console.log(products.map((entry) => ({
//     name: entry.name,
//     price: entry.price * 1.1    
//     })  
// ));
//Assisted by: Tony


// console.log(products.map((entry) => entry.name));



// Write a program to: 

// Read the JSON file. 

//Use map() to add a new field, isAdult, which is true if the age is 18 or above, otherwise false. 

// Print the updated data using console.table. 

//const Data = [ 

//    { "name": "Alice", "age": 17 }, 
  
//    { "name": "Bob", "age": 21 }, 
  
//    { "name": "Charlie", "age": 15 } 
  
//  ] 
  
// ? is the tenerary opperator, or a shorthand for an IF statement. num >= 18 ? true : false

//console.log(Data.map(entry => ({
 //   ...entry,
  //  isAdult: entry.age >= 18 ? true : false
//})))
// Asissted by the Tony Anderson




// Write a program to: 

// Read the JSON file. 


// Use map() to add a new field, discountedPrice, which is 90% of the original price.

// Print the updated data using console.table. 
/*
const data = [ 

    { "product": "Laptop", "price": 1000 }, 
  
    { "product": "Phone", "price": 500 }, 
  
    { "product": "Tablet", "price": 300 } 
  
  ] 

console.log(data.map((entry) => ({
    product: entry.product,
    price: entry.price * 0.9
})));
*/
//Assited by the local coffee addict


// Write a program to: 

// Use map() to adjust the score to be out of 100 and include it as a new field, normalizedScore. 

// Print the updated data using console.table. 


//  ((score / total) * 100)
/*
const data = [ 

    { "name": "Alice", "score": 45, "total": 50 }, 
  
    { "name": "Bob", "score": 78, "total": 100 }, 
  
    { "name": "Charlie", "score": 32, "total": 40 } 
  
  ] 

  console.log(data.map(entry => ({

...entry,
normolizedScore: (entry.score / entry.total)*100
  })))
*/
//   Assisted by THE Tony Anderson in the class CMP



// Write a program to: 

// Read the JSON file. 

// Use map() to add a new field, inStock, which is true if quantity is greater than 0, otherwise false. 

// Print the updated data using console.table. 

// const data = [ 
//     { "item": "Laptop", "quantity": 5 }, 
  
//     { "item": "Phone", "quantity": 0 }, 
  
//     { "item": "Tablet", "quantity": 3 } 
  
//   ] ;
  
// console.table(data.map(entry => ({
//     ...entry,
//     inStock: entry.quantity > 0 ? true:false
// })))
//SLIGHTLY ASSISTED BY TONY


// Read the JSON file. 

// Use map() to add a new field, totalCost, which is the product of price and quantity. 

// Print the updated data using console.table 

const data = [ 

    { "product": "Laptop", "price": 1000, "quantity": 2 }, 
  
    { "product": "Phone", "price": 500, "quantity": 3 }, 
  
    { "product": "Tablet", "price": 300, "quantity": 4 } 
  
  ];
console.table(data.map(entry => ({
    ...entry,
    totalCost: entry.price * entry.quantity
 
})))

//Microscopicaly, not even atomicaly, possiblyy quantumly, assisted by tony