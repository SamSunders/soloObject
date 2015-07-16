// Samantha Sunders
// Changing the arrays into objects
// 07/16/15

// First you need to create a function that will take in the item info for all of the employees.
// Second you need to add the employees and enter their information.
// Third, you need to change the array that held all of the arrays to hold the objects instead. 
// Fourth, change the newArray[0] = array[0] to =array[i].name;
// Fifth, change the variables to be array[i] to loop through the arrays and then add the .(key)
// to whichever thing you need to call. 

////////////////// First Step///////////////////////////////////////////////////
function Person(name, employeeNumber, salary, reviewScore) {
  this.name = name;
  this.employeeNumber = employeeNumber;
  this.salary = salary;
  this.reviewScore = reviewScore;
}

/////////////// Second Step/////////////////////////////////////////////////////
var atticus = new Person("Atticus", "2405", "47000", 3);
var jem = new Person("Jem", "62347", "63500", 4);
var boo = new Person("Boo", "11435", "54000", 3);
var scout = new Person("Scout", "6243", "74750", 5);

///////////// Third Step/////////////////////////////////////////////////////////
var array = [atticus, jem, boo, scout];

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < array.length; i++){
  array[i] = calculateSTI(array);
  newEl = document.createElement('li');
  newText = document.createTextNode(array[i]);
  newEl.appendChild(newText);
  position.appendChild(newEl);
}

function calculateSTI(object){ // you add in the objects
   var newArray = [];

/////////////////Fourth Step ////////////////////////////////////////////////////////
  newArray[0] = array[i].name; // changed the array[i] so it loops through the array 
  //that has the objects in it,

/////////////////////////Fifth Step /////////////////////////////////////////
  var employeeNumber = array[i].employeeNumber; // changed the array index to i to loop through 
  var baseSalary = array[i].salary;
  var reviewScore = array[i].reviewScore;
  var bonus = getBaseSTI(reviewScore);
  

  if(bonus > 0.13){
    bonus = 0.13;
  } // end if statement

  baseSalary = parseInt(baseSalary);
  newArray[1] = bonus;
  newArray[2] = baseSalary + (baseSalary * bonus);
  newArray[3] = baseSalary * bonus;
  console.log(newArray[0] + " " + newArray[1] + " " + newArray[2] + " " + newArray[3]);
  return newArray.join(', ');
} // end calculatesSTI function

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent;
} // end getBaseSTI function

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
} // end getYearAdjustment function

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
} // end getIncomeAdjustment function