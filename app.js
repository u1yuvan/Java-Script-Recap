///////////////////////////////////////////////////////////////////////////////////// VARIABLE nameS
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

///////////////////////////////////////////////////////////////////////Finding Elements in a JavaScript Array


// const Cars = ["Supra", "GTR", "KOIENSEGG", "LAMBORGINI"];

// // console.log(Cars.indexOf("Supra") !== -1);


// console.log(Cars.includes("GTR"));



////////////////////////////////////////////////////////////////////////Finding Elements in a JavaScript Reference Array

// const orders = [
//     {id:1, item: "smartphone", quantity:1},
//     {id:2, item: "earpods", quantity:1}
// ];


//  let result = orders.find(function(order){
//    return order.item === "earpods"
//    })//////////////////////////////////////////////////////////modifing this function into ARROW FUNCTION

//    let result = orders.find( (order) => order.item === "earpods")

//    console.log(result);

//////////////////////////////////////////////////////////////Removing Element in JavaScript Array

// const number = [18,37,20,34,5647,46,456]


// //end
// // to add .push => pop to remove
// number.pop()


// //start
// //unshift to add => shift to remove
// number.shift()


// //middle
// //splice to add in middle =>
// number.splice(1,1)


// console.log(number);


////////////////////////////////////////////////////////////////////////Emptying an JavaScript Array

// let numbers = [1,3,5,7,2]

// solution  1
// numbers = [];

// 2
// numbers.length = 0;

// 3
// numbers.splice(0, numbers.length);

// 4
// while (numbers.length) numbers.pop();


// console.log(numbers);

////////////////////////////////////////////////////////////////////////COMBINING Arrays

// let shoppingCartSnacks = [{item: "Potato chips"} ];
// let shoppingCart2 = ["banana chips", "Soft Drinks", "nivea men face wash", "Fogg black"]
// //combine
// // let shoppingCart = shoppingCartSnacks.concat(shoppingCart2);
// ////////////////////////////////////////////////////////////////////////////////////////SPREAD OPERATOR
// let shoppingCart = [...shoppingCart2, 18, "yuvan",  ...shoppingCartSnacks]


// //extract
// let extract= shoppingCart.slice(1,3 )


// console.log(shoppingCart);
// // console.log(extract);


// //////////////////////////////////////////////////////////////////////////JavaScript Arrays: Iterating Elements
// const dailyRoutine = ["Wake up", "Eat", "Sleep"];

// // //for-of
// // for (let routine of dailyRoutine)
// //     console.log(routine);

// // //For-in

// //  for(let routine in dailyRoutine){
// //     console.log(routine, dailyRoutine[routine]);
// //  }


// //FOR-EACH
// dailyRoutine.forEach(routine => { console.log(routine) })


////////////////////////////////////////////////////////////////////////////////Joining and Splitting JavaScript Arrays
/////JOINING
// const dailyRoutine = ["Wake up", "Eat", "Sleep"];

// let dailyRoutines= dailyRoutine.join("'s ");

// console.log(dailyRoutines);

///////Splitting
// let fullname ="yuvan raj"

// let username = fullname.split(" ")

// let firstname = username[0];
// let lastname = username[1];

// console.log(`My First name is ${firstname} and My last name is ${lastname}`);
// // console.log(name);

// let postTitle =`This is My Post!`.toLowerCase();
// let postslug = postTitle.split(" ");

// let finalslug = postslug.join("_");



// console.log(finalslug);

/////////////////////////////////////////////////////////////////////Sorting a JavaScript Array

// const students = [1, 8, 3, 7]

// students.sort( (a,b) => {
//     return b-a;
// })  ///////////////////////decending   //accending = students.sort();


// students.reverse()

// const students = [
//     {id:1, name:"Senthil"},
//     {id:5, name:"Guna"},
//     {id:7, name:"Velu"},
//     {id:12, name:"Thambi"},
//     {id:15, name:"anbu"},
//     {id:21, name:"Rajan"},
// ];

// students.sort((a,b) =>{
//     // a < b => -1
//     if (a.name < b.name) return -1;

//     //a < b => 1
//     if(a.name > b.name) return +1;

//     // a === b => 0
//         return 0;
// })

// students.sort((a,b) =>{
//     // a < b => -1
//     if (a.id < b.id) return -1;

//     //a < b => 1
//     if(a.id > b.id) return +1;

//     // a === b => 0
//         return 0;
// });


// // to do without case sensitive
// students.sort((a,b) =>{

//     nameA = a.name.toLowerCase();
//     nameB = b.name.toLowerCase();

//     // a < b => -1
//     if (nameA < nameB) return -1;

//     //a < b => 1
//     if(nameA > nameB) return +1;

//     // a === b => 0
//         return 0;
// })


// console.log(students);

/////////////////////////////////////////////////////////////////PRIMITIVES Testing an JavaScript Array

//Allow only Adults above 18
// const queueByAge = [24, 32, 15]
// let isAllowed = queueByAge.some((value, index, array) => {
// return value >= 18;
// });

// console.log("isAllowed: ", isAllowed);



//////////////////////////////////////////////////////////////////Testing Elements in JavaScript Array

// const items = [
//     {id:1, name: "Mobiles", isDeliverable: true},
//     {id:2, name: "smartwatch", isDeliverable: false},
//     {id:3, name: "headphones", isDeliverable: true},
// ];

// let allDeliverables = items.every((value) => {
//       return value.isDeliverable == true;
// });


// let notDeliverables = items.some((value) => {
//     return value.isDeliverable == true;
// });


// console.log("allDeliverables: ",allDeliverables);
// console.log("notDeliverables: ",notDeliverables);


//////////////////////////////////////////////////////////////////Filtering  an JavaScript Array

// const queueByAge = [24, 32, 15,45,12,23,10,18,36];
// let adults = queueByAge.filter((value) => {
//       return value >= 18;
// });


// console.log(`Adults: `, adults);

// const numbers = [1,2,3,4,5,6,7];

// let evenNumbers = numbers.filter((value) => {
//       return value % 2 === 0;
// });

// let oddNumbers = numbers.filter((value) => {
//     return value % 2 === 1;
// });

// console.log(`Even Numbers: `,evenNumbers,`
// Odd Numbers: `,oddNumbers);


// const cartItems = [
//     {id:1, item:'Nokia', cost:2500},
//     {id:2, item:'redmi 5a', cost:5000},
//     {id:3, item:'vivo S1', cost:18000},
//     {id:4, item:'OnePlus 11R', cost:45000},
// ];

// let budgetMobiles = cartItems.find((value) => value.cost >= 20000);
// console.log(`Budget Mobiles: `, budgetMobiles);



///////////////////////////////////////////////////////////Finding an JavaScript array



// const cartItems = [
//     {id:1, item:'Nokia', cost:2500},
//     {id:2, item:'redmi 5a', cost:5000},
//     {id:3, item:'vivo S1', cost:18000},
//     {id:4, item:'OnePlus 11R', cost:45000},
// ];

// let budgetMobiles = cartItems.find((value) => value.cost >= 20000);
// let MobilesIndex = cartItems.findIndex((value) => value.cost >= 20000);

// console.log(`Budget Mobiles: `, budgetMobiles);
// console.log(`Budget Mobiles: `, MobilesIndex);

// /////////////////////////////////////////////////////////////////////JavaScript Arrays: Map function()
// const people = [
//     {id:1, firstname:"yuvan", lastname:"raj"},
//     {id:2, firstname:"virat", lastname:"kohli"},
//     {id:3, firstname:"will", lastname:"smith"},
// ];

// let final = people.map((val) => {
//    let fullname =[val.firstname , val.lastname].join(" ");
//    let obj = {id: val.id, fullname};
//    return obj;
// });

// console.log(final);

//////////////////////////////////////////////////////////////////////////JavaScript Arrays: Chaining method

// let items = [
//     { id: 2, name: 'redmi 5a', cost: 5000 },
//     { id: 4, name: 'OnePlus 11R', cost: 45000 },
//     { id: 3, name: 'vivo S1', cost: 18000 },
//     { id: 1, name: 'Nokia', cost: 2500 },
// ]

// let final = items.sort((a,b) => a.cost - b.cost 
// ).sort((a,b) => {
//     if (a.name  < b.name) return -1;
//     if (a.name > b.name) return 1;
//     return 1;})
//     .filter((val) => val.cost <= 8000)
//     .map((val)=>{
//     return val.name + "- ₹"+ val.cost;
// } );

// console.log(final);

//////////////////////////////////////////////////////////////////////////JavaScript Array Reduce Method 
// const donations = [123, 64, 7456, 4546, 35, 2, 32, 4];

// let totalDonations = donations.reduce((previousval, currentval)=> {
//     return previousval + currentval;
// });

// console.log(totalDonations);


//in object 
// const shoppingCart = [
//     {id:1, item:"Wheat bread", cost:40},
//     {id:2, item:"Jam", cost:65},
//     {id:3, item:"Milk", cost:35},
//     {id:4, item:"Potato Chips", cost:50},
// ];

// const addCost = (previousval,currentval) => {
//     return previousval + currentval.cost;
// };
// let totalCost = shoppingCart.reduce(addCost,0);

// console.log("totalCost:",totalCost);


///////////////////////////////////////////////Difference Between  sort(), filter(), map(), reduce() METHODS

// const numbers = [4,6,9,2,45,35,12,18];

//sort()

// let result = numbers.sort(); 


//Find
// let result = numbers.find((val) => {
//    return val > 15;
// });



//filter

// let result = numbers.filter((val) => {
//     return val > 15;
//  });


//map

// let result = numbers.map((val) => {
//     return "@" +val;;
//  });

// let result = numbers.map((previousval,currentval) => {
//     return previousval * currentval;
//  });


//reduce

// let result = numbers.reduce((previousval,currentval) => {
//     return previousval + currentval;
//  });


// console.log(result);

////////////////////////////////JavaScript Function Declaration vs Function Expression
// let no1= 2424425;
// let no2= 7635825;

//Function Declaration
// function addNo(){
//        let result = no1 + no2;
//        console.log(result);
// };

//Function Expression(Named Function Expression)
// const addNo = function addNo() {
//     let result = no1 + no2;
//     console.log(result);
// };

//Anonymous Function Expression
// const addNo =() => {
//     let result = no1 + no2;
//     console.log(result);
// };

// const addNo = new Function("console.log(no1+ no2)")

// addNo()

//////////////////////////////////////////////////////////////////JavaScript Hoisting 

// addNoDeclaration()
// addNoExpression()

// //Function Declaration
// function addNoDeclaration() {
//     console.log("Adding no from Func. Declaration")
// };

// //Function Expression
// let addNoExpression = function(){
//     console.log("Adding no from Func. Expression")
// };


////////////////////////////////////////////////////////////////////////////Self Invoking Functions --(IIFE) 

///////////////Immediately Invoking Function Expression
/* A JavaScript immediately invoked function expression is a function defined as an expression and 
executed immediately after creation*/
// (() => {
//     let num1 = 345525;
//  let num2 = 3435415;
//     let result = num1 + num2;
//     (function displayNumber(){
//         console.log(result);
//     })();
//  })();

////////////////////////////////////////////////////////////////////////JavaScript Rest Operator 

// function expense(EMI,...sumExpenses) {

// let total = sumExpenses.reduce((a, b)=> a + b);
// return total - EMI
// };

// let result = expense(1000, 120, 70, 58, 46, 955, 46, 85);
// console.log(`Your total expense is:  ${result}`);

// ///////////////////////////////////////////////////////////////////////JavaScript Default Parameters

// function calculateTax(cost,tax = 18,){
// // tax = tax ?? 18
//  taxAmount = cost * (tax/100);
//  console.log(`Total cost is: ₹${cost}\n\n GST of tax(${tax}%) is ${taxAmount} 
//  \n\n Total amount is: ₹${cost + taxAmount}`);
// }

// calculateTax(45)


//////////////////////////////////////////////////////////////////////////JavaScript Getters and Setters


let  student = {
    firstName: "yuvan", //data property
    lastName: 'raj',
    get fullName(){
      return  ` ${student.firstName} ${student.lastName}`;
    },

   set fullName(value){
let values = value.split(" ");
this.firstName = values[0];
this.lastName = values[1] ?? "";
},
};

student.fullName = 'Sridhar';

console.log(student.fullName);








 






















































































































