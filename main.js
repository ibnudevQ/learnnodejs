(function(){
  // CRUD

  // Create
  const data = [];
  data[0] = "sheila"
  data[1] = "iga"
  data[2] = "sirait"

  const dataKey = new Array("farah", "amirah", "abidin")
  const nestedArray = [
    [0,1,2],
    [4,3,2],
    [5,2,1]
  ]
  const mixedArray = ["apple", 1, "banana", 2, "mango", 3]
  const arrayOfObject = [
    { name: "John", age: 25, languages: ["JavaScript", "Python"] },
    { name: "Kelly", age: 37, languages: ["Ruby", "Python", "C", "C++"] },
    { name: "Zack", age: 45, languages: ["Go", "C#"] }
  ]
  const numberArray = [1,2,3,4,5]




  // Read
  console.log(data[0]); // sheila
  console.log(data[data.length - 1]); // sirait

  console.log(nestedArray[0]); // [ 0, 1, 2 ]
  console.log(nestedArray[0][1]); // 1

  console.log(arrayOfObject[2].name); // Zack

      // using method
  const foundNumber = numberArray.find((number) => number > 3)
  console.log(foundNumber); // 4
  console.log(arrayOfObject.find((developor) => developor.name === "Kelly")); // { name: 'Kelly', age: 37, languages: [ 'Ruby', 'Python', 'C', 'C++' ] }




  // Update
  data[1] = "farah"
  const fruits = ["apple", "banana", "cherry"]
        // using method
        // splice()
  fruits.splice(1,1,"orange") 
  console.log(fruits); // [ 'apple', 'orange', 'cherry' ]
        // fill()
  const arr = ["HTML", "REACT", "JAVASCRIPT", "NODEJS"]
  arr.fill("MONGODB",0,4) 
  console.log(arr); // [ 'MONGODB', 'MONGODB', 'MONGODB', 'MONGODB' ]
        // map()
  const newNumber = numberArray.map(function(num) { 
    return num*2 
  })        
  console.log(newNumber); // [ 2, 4, 6, 8, 10 ]
        // forEach()
  newNumber.forEach((element, index, array) => {
      if(element % 2 === 0) {
        array[index] = element*2
      }
  });
  console.log(newNumber); // [ 4, 8, 12, 16, 20 ]
        // findIndex 
  const numberBaru = [ 2, 2, 3, 3, 5]
  function updateElement(arr, conditionFn, newValue){
    let index = arr.findIndex(conditionFn)
    if (index !== -1){
      arr[index] = newValue
    }
  }
  let conditionFn = (element) => element === 3;
  updateElement(numberBaru, conditionFn, 10);
  console.log(numberBaru); // [ 2, 2, 10, 3, 5 ]
        // Using a Custom Iteration and Condition      
  function updateArrayElements(arr, conditionFn, newValue){
    for(let i=0; i<arr.length; i++){
      if(conditionFn(arr[i])){
        arr[i] = newValue;
      }
    }
  }
  const kumpulanNomor = [1, 5, 6, 8, 3, 7]
  function isGreaterThanFive(num){
    return num > 5
  }
  updateArrayElements(kumpulanNomor, isGreaterThanFive, 10);
  console.log(kumpulanNomor); // [ 1, 5, 10, 10, 3, 10 ]

  


  // Delete

        // Method 1: Using for loop and push() Method
  const dataHapus = ['gfg', 'GFG', 'g', 'GeeksforGeeks']
  const arrayWithoutGFG = [];
  for(let i=0; i<dataHapus.length; i++){
    if(dataHapus[i] !== 'GFG'){
      arrayWithoutGFG.push(dataHapus[i])
    }
  }
  console.log(dataHapus); // [ 'gfg', 'GFG', 'g', 'GeeksforGeeks' ]
  console.log(arrayWithoutGFG); // [ 'gfg', 'g', 'GeeksforGeeks' ]
        // Method 2: Using Pop() Method
  function myFunc(){
    let arr = ['gfg', 'GFG', 'g', 'GeeksforGeeks'];
    let name = arr.pop();
    console.log(name); // GeeksforGeeks
    console.log(arr) // [ 'gfg', 'GFG', 'g' ]
  }
  myFunc()
        // Method 3: Using shift() Method
  function myFuncSecond(){
    let arr = ['gfg', 'GFG', 'g', 'GeeksforGeeks'];
    let name = arr.shift();
    console.log(name); // gfg
    console.log(arr.length) // 3s
  }
  myFuncSecond()
        // Method 4: Using splice() Method
  function myFuncThird(){
    const fruits = ["apple", "banana", "grapes", "strawberry"]
    const remove = fruits.splice(2,1,"guava", "durian", "alvocado")
    console.log(remove); // [ 'grapes' ]
    console.log(fruits.length); // 6
    console.log(fruits); // [ 'apple', 'banana', 'guava', 'durian', 'alvocado', 'strawberry' ]
  }
  myFuncThird()
        // Method 5: Using filter() Method
  const arrPrime = [2, 7, 9, 15, 19];        
  function isPrime(n){
    for(let i = 2; n > i; i++){
      if(n % i === 0){  
        return false; 
      }
    }
    return n > 1;
  }
  console.log(arrPrime.filter(isPrime)); // [ 2, 7, 19 ]
        // Method 6: Using delete Operator
  const arrDel = [2, 4, 5, 9, 19, 18]
  delete arrDel[3] 
  console.log(arrDel); // [ 2, 4, 5, <1 empty item>, 19, 18 ]
        // Method 7: Using Lodash _.remove() Method
  const _ = require("lodash"); 
  let arrayLod = [1,2,3,4,5]
  let even = _.remove(arrayLod, function(n){
    return n%2 === 0;
  })
  console.log('Original Array', arrayLod); // Original Array [ 1, 3, 5 ]
  console.log('Remove element array', even); // Remove element array [ 2, 4 ]
  
  
})()
