/* Assignment 10

Task 1
Create an empty object and assign it to a variable.
Create an object with properties for name, age, and profession.
*/

let emp = {};

let info = {
    name : "Javed Aslam",
    age : 33, 
    profession : "Teacher"
}

/* Task 2: Object Properties

Access and print the values of properties from an object.
Modify the value of a property in an object.
Add a new property to an existing object.*/

console.log(info.name); // access the properties of object which created in task 1  
console.log(info.age = 23);  // update the object value 
info.education = "BS Computer Science" // add a new properties in existing object
console.log(info);  // see the final object after update 

/* Task 3: Object Methods

Create an object method that prints a message to the console.
Create a method that calculates and returns a value based on object properties.  */

let msg = {
    disMsg : "This message will display in console",
}
console.log(msg.disMsg)

// Task 3 (ii)

let rectangle  = {
    width : 10,
    height : 25
}

function calculateArea (rectangle){
    return rectangle.width*rectangle.height
}
    const  area = calculateArea(rectangle);
console.log(area);

/* Task 4: Object Iteration

Iterate over the properties of an object and print their values.
Iterate over the properties of an object and perform a specific action for each property. */


let itemsList = {
    keyboard : 500, 
    mousse : 250,
    Lcd : 5500
}
console.log(Object.values(itemsList));
console.log(`All available stock are ${Object.keys(itemsList)}`);


/* Task 6: Object Nesting

Create an object that contains another object as one of its properties.
Access and modify properties of a nested object.*/


let studentsinfo = {
    moiz : {
        name : "Muhammad Moiz",
        age : 19,
        District : "Faisalabad"
    },
    ali : {
        name : "Muhammad Ali",
        age : 21,
        District : "Lahore"
    }
}

console.log(studentsinfo.moiz.age)  // display the age of moiz 
console.log(studentsinfo.ali.age)  // display the age of ali 
console.log(studentsinfo.moiz.District)  // display the age of ali 
console.log(studentsinfo.ali.District)  // display the age of ali 
studentsinfo.ali.age=15                 // update / modifiy the age of ali 
console.log(studentsinfo.ali.age)  // display the age of ali 
