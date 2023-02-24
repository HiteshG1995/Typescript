console.log(`**************1) Class parameter properties***************\n`);

console.log(`Use union for multiple types`);

var  va: string | string[] | number | number [] | {};

va = 3224;
console.log(va);

va = "Hitesh";
console.log(va);

va = [34,54,56,34];
console.log(va);

va = ["Apple","Guavava","Jackfruits"];
console.log(va);

va =  { 
    
    Name: "Hitesh",
    age: 23,
    address: "Pune"
}

console.log(va);

console.log(`\nUsing function\n`);


type va = string | string[] | number | number [] | {};

function unionTest(data: va){
    let box = '';
    if(typeof data == "string"){
        console.log(`Given data is ${data} so, it is string`)
    }else if(typeof data === "number"){
        console.log(`Given data is ${data} so, it is number`)
    }else if(typeof data === "boolean"){
        console.log(`Given data is ${data} so, it is boolean`)
    }else if(typeof data === "object"){
        // box = data.map(x => x.trim()).join(' ');
        console.log(`Given data is ${data} so, it is object`);
        }
        return box;
}

console.log(unionTest("Hitesh"));
console.log(unionTest(123));
console.log(unionTest(true));
console.log(unionTest(["[Hitesh "," hello]"]));
console.log(unionTest([23,55,345,76]));

console.log(`**************2) Class parameter properties**************`);

class Employee{

    constructor(public name:string, public age:number, public emailaddress: string, public phoneNum: number){

    }
}
const stud1 = new Employee("Hitesh", 25, "Hiteshghadage08@gmai.com", 898343454)
console.log(`Student name is: ${stud1.name}
Student age is ${stud1.age}.
Student emailID is: ${stud1.emailaddress}.
Student phone number is: ${stud1.phoneNum}`);

console.log(stud1);


console.log(`**************3) Intersection Type**************`);

type name = {
    name: string 
}

type EmailAddress = {
    email: string;
}

type phoneNum = {
    phone: number
}

type ContactDetails1 = 
& name
& EmailAddress
& phoneNum;

let Employee1:ContactDetails1 = {
    name: "Hitesh",
    email:"hiteshghadage@gmail.com",
    phone:56467433
}

function contact(details2:ContactDetails1 ): void{
console.log(`Dear "${details2.name}".
your email ID is "${details2.email}".
and your contact number "${details2.phone}"`);
}
contact(Employee1)
console.log(`**************4) Optional parameters**************`);

function display(name: string, age: number, emailID: string, status?: string){
        console.log(`Name of Student ${name}`);
        console.log(`running age is ${age}`);
        console.log(`EmailID is ${emailID}`);
        if(status!=undefined){
            console.log("Is Married", status)
        }
}

display("Hitesh", 25, "hiteshgha@gmail.com", "No" )
console.log(``);
display("Rohan", 30, "Rohan@gmail.com" )
console.log(``);
display("Rakesh", 27, "Rakeshdhs@gmail.com","Yes" )

