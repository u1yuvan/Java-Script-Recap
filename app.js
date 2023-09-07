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

// let highIncome = true;
// let Cibilscore = true;
// eligiblePerson = highIncome || Cibilscore

// let ApplicationStatus = !
//  eligiblePerson 
// console.log("Loan Status: " +  eligiblePerson);
// console.log("Application Status: " +  ApplicationStatus);


// let userColor = null
// let defaultColor = "White"

// currentColor = userColor|| defaultColor;

// console.log("Selected Color: "+ currentColor);


/////////////////////////////////////////////////IF ELSE (CONDITION STATEMENT)

// let isRaining = false;
// let isCloudy = false;


// if (isRaining || isCloudy)
//     console.log("Dont forget to take umbrella!");
// else
//     console.log("it's a clear sky enjoy your day");

// if the time between 12am to 1pm  -> Good Morning
// if the time between 1pm to 5pm  -> Good Afternoon
// if the time between 5pm to 12am  -> Good Evening

// let hour = new Date().getHours();


// if (hour >= 0 && hour <= 12)
//     console.log("Good Morning");

// else if (hour >= 12 && hour <= 17)
//     console.log("Good Afternoon");

// else
//     console.log("Good Evening");

/////////////////////////////////////////////////////////CONDITION STATEMENT (switch case)
// let grade = "E"

// switch (grade) {
//     case "S":
//         console.log("Diamond Grade"); break;

//     case "A":
//         console.log("Golden Grade"); break;

//     case "E":
//         console.log("Bronze Grade"); break;

//     case "U":
//         console.log("Failed Grade"); break;

//     default:
//         console.log("Unknown Grade");
// }


// let Marks = 95;

// switch (true) {

//     case (Marks > 90):
//         console.log("EXCELLENT"); break;

//     case (Marks > 40):
//         console.log("JUST PASS"); break;

//     case (Marks < 40):
//         console.log("FAIL JUST OPEN THE FUCKIN BOOK AND READ IT"); break;


//     default:
//         console.log("FAIL JUST OPEN THE FUCKIN BOOK AND READ IT ");
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////FOR LOOP
// SYNTAX
// for(initialExpression; Condition; step){
//     console.log("number #1");
// }

// for(let i = 20; i >= 1; i--){

//     if(i % 2 !==1){
//         console.log("Number #", i);
//     }

// }
/////////////////////////////////////////////////////////////////////////////////////////////////WHILE LOOP
// let i = 5

// while (i <= 20) {

//     if (i % 2 !== 0
//     ) {
//         console.log("Number while #" + i);
//     }
//     i++
// }

// ////////////////////////////////////////////////////////////////////////////////////////////////DO-WHILE
// do {
//     if (i % 2 !== 0
//         ) {
//             console.log("Number do-while #" + i);
//         }
//         i++
// } while(i <= 20)


/////////////////////////////////////////////////////////////////////////////////////////////////////FOR IN LOOP

// const person = {
//     name:"yuvan",
//     age:21,


// };

// for(let key in person){
//     console.log(key+": " + person[key]);
// }


// let colors =['red', 'blue', 'green', 'black'];

// // for(let key in colors){
// //     console.log(colors[key]);
// // }
// /////////////////////////////////////////////////////////////////////////////////////////////////////FOR OF LOOP


// for(let color of colors){
//     console.log("color: "+color);
// }


// ///////////////////////////////////////////////////////JavaScript Object and OOP(Object Oriented Programming)

// let name = "yuvan";
// let age = 21;
// let interest = ['web development and  gaming'];

// let address = {
//     city: "coimbatore",
//     state: 'tamilnadu',
// }

// function greetuser(){
//     let msg = `My name is ${name}, I love ${interest}`;
//     console.log(msg);
// }

// greetuser();

// let person = {
//     name: 'yuvan',
//     age: 21,
//     interest: ['web development, gaming'],
//     address: {
//         city: "coimbatore",
//         state: 'tamilnadu',

//     },
//     greeting: function(){
//             let msg = `My name is ${this.name}, I love ${this.interest}`;
//             console.log(msg);
//         }

//     };
// person.greeting();


////////////////////////////////////////////////////////////JavaScript Factory Function
// function createPerson(name){
//    return {
//         name,
//         greeting() {
//             console.log(`My name is ${this.name}`);
//         } 
//     };
// };

/////////////////////////////////////////////////////CONSTRUCTOR FUNCTION

// function Person(name){
//     this.name = name;
//     this.greeting = function(){
//         console.log(`My name is ${this.name}`);
//     }
// }

// let yuvan = new Person('yuvan');

// yuvan.greeting();

//////////////////////////////////////////////////////////////////JavaScript Dynamic Nature of Objects


// const person = {
//     name:'yuvan'
// }

// person.age = 21;
// person.greeting = function(){}

// delete person.greeting
// delete person.name

// console.log(person)

//}



///////////////////////////////////////////////////////////Enumerating properties of an Object
// const user = {
//     name: 'yuvan',
//     getfullname() {
//         console.log(`My name is ${this.name}`);
//     }
// }

// let another = {user};

// console.log(another);

// JavaScript Inbuilt Objects

//////////////////////////////////////////////////////////////////// console.log(Math.random() * (100 - 1) + 1);

// let Marks =[45,56,74,13,85,59,96,69];

// let result = Math.max(...Marks);

// console.log("Maximum Marks:" ,result);

//////////////////////////////////////////////////////////////////////////TEMPLATE LITERALS
// const name = "stark"
// const message ="Thankyou "+name+" for watching\n\"Half-Baked\" youtube Channel"

// const message2= `Thankyou ${name} for watching
// "Half-Baked" youtube Channel


// from
// yuvan`




// console.log(message);
// console.log(message2);

///////////////////////////////////////////////////////////////////////Adding Elements to an JavaScript Array


const number =["Supra","GTR","KOIENSEGG","LAMBORGINI"];

//push
number.push("BENTLY")

//unshift
number.unshift("Mchlaren")

//splice
number.splice(2,0,"BUGATI")

console.log(number);




