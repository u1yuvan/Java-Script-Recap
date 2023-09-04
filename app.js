///////////////////////////////////////////////////////////////////////////////////// VARIABLE NAMES 
// var - old way of saving variables
// let - modern way of saving varables(we can modify or edit value any time)
// const - we can't change the value (permanent value we can't edit or modify)
//VARIABLES
// {object}
// [array]

// let name = "yuvan";
// name ="YUVAN"
// const DOB ="10-10-2002"//we can use const variable like this permanent value
// let msg = "hello my name is " + name + " im Building JS i was born in "
// // alert
// alert(msg);

// // logging
// console.log(msg, DOB);


/////////////////////////////////////////////////////////////////////////////////////////////////////OBJECT
// let laptopSpecifications= {
//     Brand:"HP",
//     Model:"hp15s 15inch",
//     Processor:"Ryzen 5700u",
//     RamOptions:{
//         1:"8gb",
//         2:"16gb"
//     },
//     KeyBoardType:"Chicklet keyboard with backlit",
//     Rom:"500gb",


// }

// console.log(laptopSpecifications)




///////////////////////////////////////////////////////////////////////////////////////////////////////ARRAY

// let colors =["Blue", "Black", "Red","Green"]
// colors[5] = "white"

// console.log(colors);



///////////////////////////////////////////////////////////////////////////////////////////////////////FUNCTIONS

// function greetuser(firstname, lastname) {
//     let msg = "hello my name is " + firstname + " " + lastname + " im Building JS";
//     console.log(msg);
// }


// greetuser("yuvan", "raj")

// greetuser("virat", "kohli")


// ///////////////////////////////////////////////////////////////////ARITHMETIC  OPERATORS(ADDITION SUB MULTI DIVISION)
// function add(number1,number2){
//     console.log(number1 + number2);
// }

// add(570980,384689)

// let Number1 = 7;
// let Number2 = 3;

// // INCREMENT(++)
// console.log(Number1++);
// console.log(Number1);

// // DECREMENT (--)

// console.log(--Number1);
// console.log(Number1);

////////////////////////////////////////////////////////ASSIGNMENT OPERATORS


// let x = 5;
// // x = x + 2
// x *=7
// console.log(x);

//   ////////////////////////////////////////////////////COMPARISION OPERATOR


// let x = 5;
// /////////////////////////////////////////////////////Relational operator
// console.log(x < 5);
// console.log(x <= 5);

// console.log(x > 5);
// console.log(x >= 5);



// /////////////////////////////////////////////EQUALITY OPERATOR
// console.log(x === 5);
// console.log(x !== 5);


//string comparision

// console.log('alan' > 'anbu');

////comparision of different types

// console.log('1' < 5);
// console.log(true == 0);
// console.log(true == 1);

//  strict eqality operator ===  (number === number) ok  (number (5) === string "7")undefined
// lose equality operator  == ( number == number) ok (srting == number)ok


// //////////////////////////////////TERINARY OPERATORS

// If the person age is more than 18,they are "adult" category otherwise child category......................................


// let age = 20;

// let type = age >= 18 ? "Adult Ticket" : "Child Ticket";

// console.log(type);


///////////////////////////////////////////////////LOGICAL OPERATOR

// and &&
// or ||
// not !


// highIncome, Cibilscore -> loan eligible, Ineligible

let highIncome = true;
let Cibilscore = true;
eligiblePerson = highIncome || Cibilscore

let ApplicationStatus = ! eligiblePerson 
console.log("Loan Status: " +  eligiblePerson);
console.log("Application Status: " +  ApplicationStatus);


