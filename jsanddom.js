// Example unit test function
function divide( a, b ) {
  // To see the test pass, uncomment the following line
  //return a / b;
}

// Write a function that takes a single argument (a string) and returns the string reversed.
function reverseString(str) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--){
    o += s[i];
  }
  return o;
}

// Write a function that takes an array of numbers and returns the minimum value
function findMinValue(values) {
  if(Object.prototype.toString.call(values) === "[object Array]"){
    return Math.min.apply(null, values);
  } else {
    console.log("Type of value passed in must be an array.");
    return false;
  }
}

// Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
function findDistinctValues(values) {
  if(Object.prototype.toString.call(values) === "[object Array]"){
    var unique = values.filter(function(elem, pos) {
      return values.indexOf(elem) == pos;
    });
    return unique;
  } else {
    console.log("Type of value passed in must be an array.");
    return false;
  }
}

// Write a function that logs the numbers from 1 to 100 to the console.
// For multiples of three print "Fizz" instead of the number.
// For multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".
function doFizzBuzz() {
   for(i = 0; i < 100;){
     console.log( (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i);
   }
}

// You have a master array of strings, where each element is a fruit name.
// You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
// For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
// Write the function that will remove the values contained in fruitsToRemove from the array fruits.
function removeFruits(fruits, fruitsToRemove) {
  for(var a = 0; a < fruits.length; a++){
    for(var b = 0; b < fruitsToRemove.length; b++){
      if(fruits[a] === fruitsToRemove[b]){
        fruits.splice(a, 1);
      }
    }
  }
  return fruits;
}

// Write a function to push either a simple value or an array of values onto a specified array.
// For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
// If toPush is a simple value, it should be pushed onto array as an element.
// If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
function pushOntoArray(array, toPush) {
  if(Object.prototype.toString.call(toPush) === "[object Array]"){
    array.push.apply(array, toPush);
  } else {
    array.push(toPush);
  }
  return array;
}

// Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
function splitListStrUsingComma(sourceStr) {
   if(sourceStr !== ""){
     sourceStr.split(",");
   } else {
     sourceStr = [];
   }
   console.log(sourceStr);
   return sourceStr;
}

// Write a function that will take any number of arguments and return their sum
function sum() {
  var numsInArg = [], total = 0;
  for(var i = 0; i < arguments.length; i++){
    for(var j = 0; j < arguments[i].length; j++){
      if(typeof arguments[i][j] === "number"){
        numsInArg.push(arguments[i][j]);
      }
    }
  }
  for(var k = 0; k < numsInArg.length; k++){
    total += numsInArg[k];
  }
  return total;
}

// Write a function that will return true if a specified string consists of only whitespace.
function isOnlyWhitespace(sourceStr) {
  if (/\S/.test(sourceStr)){
    return false;
  } else {
    return true;
  }
}

// write an example of a javascript closure
function meet(greeting){
  return function expressThought(thought){
    return greeting + ", what I'd like to say is " + thought;
  }
}

// define a json object that represents a collection of people.
// each person should have the following properties
// - first name
// - last name
// - city
// - state
// - zip
// - a collection of phone numbers (home, work, mobile)
{
  "Person 1": {
    "firstName": "Joe",
    "lastName": "Smith",
    "city": "Atlanta",
    "state": "Georgia",
    "zip": 12537,
    "contact": {
      "home": "317-551-4418",
      "work": "378-381-4821",
      "mobile": "382-718-6731"
    }
  },
  "Person 2": {
    "firstName": "Jane",
    "lastName": "Smith",
    "city": "Atlanta",
    "state": "Georgia",
    "zip": 12537,
    "contact": {
      "home": "317-551-4418",
      "work": "382-348-5787",
      "mobile": "991-573-8917"
    }
  },
  "Person 2": {
    "firstName": "Joe Jr.",
    "lastName": "Smith",
    "city": "Atlanta",
    "state": "Georgia",
    "zip": 12537,
    "contact": {
      "home": "317-551-4418",
      "work": null,
      "mobile": null
    }
  }
}


// Create a javascript object (DataTable) with the following:
// A private columns property (string array)
// A private rows property (string array)
// A public method addRows that adds an item to the rows array
// A public method addColumns that adds an item to the columns array
// A public method getData that returns the a json object representation of the DataTable
// Note: the row object should be a hash of the column name and row item value
// Example:
// .addColumns('column1', 'column2', 'column3');
// .addRow('value1A', 'value1B', 'value1C');
// .addRow('value2A', 'value2B', 'value2C');
function DataTable(){
  this.rows = [];
  this.columns = [];
  this.addRows = function(){
    for(var i = 0; i < arguments.length; i++){
      this.rows.push(arguments[i]);
    };
  };
  this.addColumns = function(){
    for(var i = 0; i < arguments.length; i++){
      this.columns.push(arguments[i]);
    };
  };
  this.getData = function(elId){
    if(elId !== null){
      var elementId = document.getElementById(elId);
      elementId.innerText = JSON.stringify(this);
    } else {
      console.log(JSON.stringify(this));
    }
  }
}
DataTable.getData();

// within div1, programatically create a
// SELECT element (with multiple items) and a button.
// when the button is clicked write out the name and value of the selected item to the console.

// Write 5 different jQuery selectors to retrieve the
// sample anchor in the markup below.

// Programatically create an array with 5 items.  Create a list item for each item in the array
// and add the list items to the unordered list with an id of "list1".

// Use javascript to add a list of checkboxes and 2 links
// to the div with an id of "foobar"
// When the first link is clicked, all the checkboxes should be checked (i.e. check all)
// When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
