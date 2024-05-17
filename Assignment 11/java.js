console.log ("My Name is Javed")
 console.log(123);
 let pen=10
 let pencil=5
//  console.log("The Price of pen and Pencel", pen+pencil, "Rupees.");
console.log(`The price of pen and pencel ${pen+pencil} Rupees.`);

for(let w=1; w<=5; w++) {
    console.log(w);
}

for(let o=6; o>=1;o--){
    console.log(o)
}

for(let i=1; i<=15; i=i+2){
console.log(i) 
}

    let size="L"
    
  if(size=="XL"){
    console.log("Rs.250")
}
else if (size=="L"){
    console.log("Rs 200")
}
else if (size=="M"){
    console.log("Rs 150")
}
else if (size=="S"){
    console.log("Rs 50")
}


for(let o=1; o<=15;o+2){
    console.log(o)
}


let color="greed"

if (color=="red"){
    console.log("Stop!")
}
else if (color=="yellow"){
    console.log("Ready to go")
}
else if (color=="greed"){
    console.log("Go")
}



let marks = 32

if (marks>=33){
    console.log("Pass")
    if (marks>=80){
        console.log("Grade O")
        }
    else { console.log ("Grade A")}
}
else {console.log ("Fail")}



let marks=70

if (marks>=33 && marks>=80){
    console.log("Pass")
    console.log("Grade A+")
}

let str="epple"

if (str[0]==="a" && str.length>=3){
    console.log("Good Stringe")
}
else{console.log("bad stringe")}


let num=13

if ((num%3===0) && (num+1==15 ||  num-1==11)){
    console.log ("safe")
} else{
    console.log("unsafe")
}

if (undefined){
    console.log("it has true vale")
}
else{
    console.log("it has false vale")
}

// switch

// let colour="green" 

// switch (colour){
//     case "red" :
//         console.log("stop!");
//         break;
//     case "yellow" :
//         console.log("ready to go");
//         break;
//     case "green" : 
//         console.log("Go");
//         break;
//     default :
//         console.log("signal is broken")
       
// }

// let day=10

// switch (day){
//     case 1:
//         console.log("Moday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3 :
//         console.log("Wednesday");
//         break;
//     case 4 : 
//         console.log("Thursday");
//         break;
//     case 5 :
//         console.log("Friday");
//         break;
//     case 6 :
//         console.log("Saturday");
//         break;
//     case 7 :
//         console.log("Sunday");
//         break;
//     default :
//         console.log("Signal is not working")
        

// }



let firstName= prompt("Enter your name here");
let lastName= prompt("Enter your Last Name");
let msg= "welcome"+ " " + firstName + " " + lastName ;
alert(msg)
console.log("welcome", firstName, lastName, "!")




let str= "apple"

if (str[0]==="A" && str.length> 5){
    console.log("Its a golden strange")
}
else {
    console.log("Its a bad strange")
}


let q=35
let r=40
let s=35

    if (q>r) {
        if (q>s){
            console.log("Q is largest")
        }
        else{
            console.log("S is largest")
        }
           }
    else { if (r>s){ 
        console.log( "R is greatest")

    }
    else {
        console.log("S is largest")
    }
}



let num1=12559
let num2 = 44123659

if ((num1%100)==(num2%100)) {
    console.log(`${num1} and ${num2} last digits are equal `)
} else{
    console.log("last digits are not equals")
}


str.trim
let msg = "                              hellow World    "
 msg = msg.trim()
console.log(msg)

alert(msg.trim())

let password = prompt("set your password")
let newPassword = password.trim()
alert(newPassword)


let password = prompt("set your password")
alert(password.trim())


strangeName.toLowerCase()
strangeName.toUowerCase()
    let name = "javed"
    let NAME = name.toUpperCase()
    console.log(NAME)

    let str = "ABCD"
    let newStr = str.toLowerCase()
    console.log(newStr)


// indexOf
     let message = "I Love Codding"
    //  console.log(message.indexOf("Love"));
     console.log(message.indexOf("j")); //-1 mean not found

Method Chaining
     let Msg = "   Hellow World   "
     
     console.log(Msg)
    let newMsg = Msg.trim()
    console.log(newMsg)
    let newMsg1= newMsg.toUpperCase()
    console.log(newMsg1)

    all above code in one line

    console.log(Msg.trim().toUpperCase())

.slice

let example = "I Love Pakistan"

console.log(example.slice(2,6));
console.log(example.slice(2,example.length));
console.log(example.slice(7));
console.log(example.slice(-8));

.replace

        let example = "i love pakistan"
        let example2 = example.replace("love", "do")
        console.log(example2);
        console.log(example.replace("love", "hat"));
        console.log(example.replace("p", "K"));

.repeat

        let fruit = "Mango"
        console.log (fruit.repeat(3));


                                    Practice Questions

let msg = "help"
// trim and convert to upper case.
console.log(msg.trim().toUpperCase());


        let name = "apnaCollege"
        console.log (name.slice(4,9))
        console.log (name.indexOf("eg"));
        console.log (name.replace("apna", "hamara"));
        console.log (name.slice(4).replace("ll","gg"));
        console.log (name.slice(4).replace("l","g").replace("e","o"));


Array

    let students = ["Ali", "Abdul Ghaffar", "Zahoor"];
    let marks = [22, 33, 32, 12];
    let info = ["Ali", 33, 3.5, "javed"] // mixed Array
    console.log(info[2]);
    console.log(info.length);
empty Array

        let em1 = [];

    marks.length          
    
// Array Methods
    push : add to end 
    unshift : add to Stat 
    shift  : delete from end and returns it 
    pop : delete from end and returns it 

let students = ["Ali", "Abdul Ghaffar", "Zahoor"];

        students.shift()
        students.pop()
        students.push("Moiz")
        students.unshift("Arshad");

        let block = students.shift()


Concate
    merge 2 arrays

    let monts = ["january", "february", "march"];
    let days = ["saturday", "sunday", "Monday"];

    console.log(monts.concat(days))

// Reverse
    // it reverse the Array. 
    console.log(monts.reverse())


// Slice

 let color = ["blue", "green", "yellow", "white"];
        color.slice(3);
        color.slice(3,5);
        color.slice(-2);
        color.slice();
        
let num = "1,2,3 ";

    if (num.length===0){
        console.log("string is empty")
    } else{
        console.log("stringe is some vale")
    }
// to check wheather character is lower case or not
let name= "muhammad javed aslam"

    if (name[2]==name[2].toLowerCase()){
        console.log("given character is in lower Case")
    }
    else{
        console.log("given data is not in lower case")
    }

//to check element exist in array or not 
     let num1 = ["ali", "javed", "muhammad rizwan"]
    if (num1.indexOf("javed")!==-1){
        console.log("element exist in list")

    } else{
        console.log("element does not exist")
    }











for(let i =1; i<=5; i++){
console.log(i)}

for (let i = 1; i<=15; i=i+2) {
    console.log(i)
} 

for (let i = 15; i>=0; i=i-2){
    console.log(i)
}

console.log("print even numbers 1 to 10")

for (let i = 0; i<=10; i=i+2){
    console.log(i)
}

console.log("print even number 10 to 1")

for (i=10; i>=0; i=i-2){
    console.log(i)
}

console.log("multiplication of 5")

for (i=5; i<=50; i=i+5){
    console.log(i)
}


        console.log("Enter any number to print table in console")
        let n = prompt("Enter your number");
          n= parseInt(n);

        for (i=n; i<=n*10; i=i+n){
            console.log(i)
        }


console.log("nested loop")

        for (i=1; i<=3; i++){
            console.log(`multiply of 5 ${i}`)
            for (j=5; j<=50; j=j+5){
                console.log(j)
            }

        }



// while loop

// let l = 1
 
// while(l<= 10){
//     console.log(l);
//     l=l+2;
// }


let fav = "Avatar"

let guess = prompt("Enter your favorite Movie")
    
    while ((guess!=fav) && (guess != "quite")){
       guess = prompt("Wront guess try again ")
    }

Loops with Array

    let  fruit = ["mango","Banana", "pineapple", "litchi", "Graps"]
    fruit.unshift("gava", "charry");
    for (i=0; i<fruit.length;i++){
        console.log(i, fruit[i])
    }

for (i=fruit.length-1; i>0;i--){
    console.log(i, fruit[i]);
}

// nested array loop.
        let hero =[
            ["spiderman", "wondrwoman", "crazylady"],
            ["thor", "blackman", "goldman"]
        ]


        for (i=0;i<hero.length;i++){
            console.log(i,hero[i])
            for (j=0; j<hero[i].length;j++)
            console.log(j,hero[i][j])
        }

// example 1

        let students = [
            ["javed", 921],
            ["Moiz",345],
            ["Hassan",889]
        ]
    
    for (let i=0; i<students.length;i++){
        console.log(students[i])
                for (let j=0;j<students[i].length;j++){
            console.log(students[i][j])
        }
    }

// for of loop (it does not work on internet explorer)

        let computer = ["Laptop", "HP", "intel", "B4U"];

        for (items of computer){
            console.log(items)
        }

// nested for of loop 

        let hardware = [
            ["mouse", "keyboard"],
            ["hard disk", "ram"],
            ["motherboard", "processer"]
            ]

    for (items of hardware){
        for (individtualitem of items){
            console.log(individtualitem)
        }
    }

// Write a JS program to delete all occurrences of element ‘num’ in a given array.
    let arr = [1, 2, 3, 4, 5, 6, 2, 3];
    let num = 3

    for (let i=0; i<arr.length;i++){
        if (arr[i]==num){
            arr.splice(i,1)
        }
    }
    console.log(arr);

//Write a JS program to find the no of digits in a number.
// Example : if number = 287152, count = 6
  let  number = 287152


// to do list 

let todo = [];

    let req = prompt("enter your task");
     
    while(true){
        if (req == "quit"){
            console.log("Quite the app");
            break;
        }
   if (req == "list"){
        for (i=0;i<todo.length;i++){
            console.log(i, todo[i])
            }
        }

    else if (req == "add"){
       let task= prompt("enter your task you want to add");
       todo.push(task);
       console.log("task added")
    } 
    
    else if (req == "delete"){
        let ind =  prompt("please enter the idex number to delete")
        todo.splice(ind,1);
        console.log ("task deleted");
        }
    else {
        console.log("wrong request")
    }
    req = prompt("enter your task");
}

//Objects Literals

let students = {
    name : "javed",
    age  : 28,
    education : "BSc",
    Country : "PakistN",
    favorate : ["red", "green"],
    language : "english",
}


let item = {
    product1 : "milk"
}

// post for twiter

const post = {
    userName : "@javed",
    postContent : "This is my first post",
    likes : 190,
    repost : 88,
    comments : 41,
    shareBy : ["@ali", "@naveed"],
}


//objects of object

    let  classInfo = {
         javed : {
            grade : "A+",
            age :   28,
            city : "Kalkata",
         },
         Ali : {
            grade : "A+",
            age : 24,
           city : "Faisalabad",
        },
         sameer : {
            grade : "B+",
            age : "23",
            city : "Sialkot",
         }
    };

// Aray of objects

    let  class1 = [
        {
        name : "javed",
        age : 22,
        city : "Multan",
        }, 
        { 
        name : "kaleem",
        age : 33,
        city : "noorPur",
    }
    ]

// Guessing Game

let max = prompt("Enter a number");
let randomNumber = Math.floor(Math.random()*max)+1;
     console.log(randomNumber);

let  guess = prompt("Enter a guess number");

    while (true){
        if (guess == "quit"){
            console.log("Quit the game")
            break;
        }
        if (guess == randomNumber){
            console.log("You are right")
            break;
        }
        else if (guess < randomNumber){
            guess = prompt ("Your number is smaller . try larger one.");
        }
        else {guess = prompt ("Your number is larger. try smaller one.");}


// function

function hellow (){
    console.log("Hellow world")
}


hellow();
hellow();

function fruit() {
    console.log("mango", "apple", "banana", "graps", "orange")
    console.log("pineapple", "gava", "Papita", "stabrey")
}

fruit()

// loop in function
function integers1to10(){
    
    for (let i=1;i<=10;i++){
        console.log(i);
    }
}
integers1to10(); // calling function. function will only work when you call it.


// if in function

    function adult() {
        let age = 16
    if (age>=18){
        console.log("Adult");
    } else{
        console.log("Not Adult")
    }
    }

    adult();
// create a random numbe 1 to 6 in function.


        function dice(){
            let num = Math.floor(Math.random()*6)+1;
            console.log(num);
        }

        dice();

// function with arguments

function sum(a,b){
    console.log(`sum of ${a} and ${b} is ${a+b}`);
}

sum(44,1888);

// create a number that give u the average of three numbers

function average(a,b,c){
    console.log((a+b+c)/3)
};

average(2,4,6);
average(10,20,30);

// also same the this one 

function callaverage(a,b,c){
    let avg = (a+b+c)/3;
    console.log(avg)
};

callaverage(50,100,150);


// craate a programe to print a table 


function printTable(a){
    for (let i = a; i<=a*10 ;i=i+a){
        console.log(i);
    }
}

printTable(12);

// returns in function


function sum(a,b){
    return (a+b)
}

console.log(sum(1,2));

 // create a function that returns the sum of 1 to n numbers.
console.log("..............")


function getSum (n){
    let sum=0;
    for (let i = 1; i<=n; i++) {
        // sum +=i;
         sum= sum+i
           }
   return sum;
}

console.log(getSum(10));
console.log(getSum(100));
console.log(getSum(1000));

// create a function that concatenations all the stings in a array

let str = ["hellow", "hi", "by", "!"]
 
function final(str){
    let result = "";
    for (let i = 0; i<str.length;i++){
        result += str[i];
    }
    return result;
}


console.log(final(str));

// lexical scope

function outerFunct(){
    let x = 8;
    let y = 8;
    
    function innerFunct(){
        console.log(x);
        console.log(y);
    }
    innerFunct();
}


// Question 

        let great = "hellow"  // Global Scope

        function MuslimGreat(){
            let great = "AOA"   // function scope
            console.log(great);
            function replygreat(){
                console.log("Walikum Salam"); // Lexical scope
            }
            replygreat()
        }
        console.log(great);
        console.log(MuslimGreat());

//   Function Expressions

        let addition = function (a,b){
            return a+b
        }
    
    console.log(addition(5,44));

    // example 2
     let name1 = function(){
       console.log("Javed Aslam");
    }
    console.log(name1());
    // we can update function like a variable if we store it in a variable.
        
        name1 = function(){
            console.log("Javed");
        }
        console.log(name1());

// Higher order function 

        let multipleGreet = function (greet, count){  // higher order function
            for (i=1; i<=count; i++){
                greet();
            }
        }
            let greet = function(){
                console.log("hellow");
            }
        
        multipleGreet(greet,10);

// Higher Order function;  return a function

            

           
        function oddEvenFactory(request){
            if (request== "even"){

                return function(n){
                    console.log(n%2==0)
                }
            }
          else if (request == "odd"){ 
           return function(n){
            console.log(!(n%2==0))
        }}
        
         else {"wrong request"}
    }

        let request = "odd"  // "even"

        let func = oddEvenFactory(request)

    console.log(func(5));


// Methods  

    const calculator = {
        num : 77, 

        add : function(a,b){
            return a+b;
        },
        sub : function(a,b){
            return a-b;
        },
        multi : function(a,b){
            return a*b;
        },
        div : function(a,b){
            return a/b;
        }

    }
    
    console.log(calculator.add);
    console.log(calculator.add(33,33));
    console.log(calculator.sub(33,33));
    console.log(calculator.multi(33,33));
    console.log(calculator.div(33,33));


    console.log("function practice");

    let total = 0
    let n=5 

    for (let i=1; i<=n; i++){
        total=total+i
        console.log(total)    }

// this 

const student1 = {
    name1 : "javed",
    age : 27,
    phy : 96,
    chem : 98,
    math : 99, 
    getAvg  (){
        let avg = (this.phy + this.math + this.chem)/3;
        console.log(`${student1.name1} got avgerate ${avg} marks`) 
    }
}

student1.getAvg()

// try // cathc 
    let numberSeries = [1,2,3,4];

        console.log(numberSeries)
    try{
        console.log(alphabet);
    } catch{
        console.log("the variable 'alphabet' are not exit");
    }

// Arrow function =>

    let multiplicationOftwoNumbers = (a,b) => {
        console.log(a*b)
    }
    multiplicationOftwoNumbers(5,10)

    // we also can write in this way. as return

    const  sumOfTwoNumbers = (a,b) => {
       return (a+b)
    }
    console.log(sumOfTwoNumbers(2,5))
    // example 3

    let cube =(n) =>{ // we can also write cube = n (without pranthesis)
        return n*n*n
    }
    console.log(cube(5));
    // example 4

    let pow = (a,b) => {
        return a**b
    }

    console.log(pow(2,3));

    // example 5 

    let greatings = ()=>{
        console.log("Hello World")
    }

    greatings()
// implicit return 

    let cube1 = (n) =>(n*n*n);
    console.log(cube1(3))
    
    // example 2 
    let sum2 = (a,b) => (a+b)
    console.log(sum2(2,3))

// set timeout

console.log("hi there");
setTimeout (()=>{
    console.log("it will display after some delay");
},4000)
console.log("welcome to");

// set interval

    // let id = setInterval(() => {
        // console.log("it will display after every 2 seconds");
    // }, 2000);
    
    // console.log(id)

// write a arrow function that return a square of a number n 

 
     sequare = (n) => {
        console.log(n*n)
    }
    sequare(3)

    // we can also write as 

    sequare1 = (n) =>(n*n)
    console.log(sequare1(9));

// write a function to print hello world 5 time at interval of 2 second each.

    let id2  = setInterval ( () => {
        console.log("hello world")
        },2000)
    
    setTimeout (()=> {
        clearInterval(id2)},10000
    )

// write a arrow function named arrayAverage that accepts an array of numbers and return the average of those numbers
     
const arr1 = [1,2,3,4,5,6];
 let total2 =  0;
const arrayAverage1 =  (arr1) => {
    for (let number of arr1){
        total2+= number
    } return total2/arr1.length
}
console.log(arrayAverage1(arr1));
