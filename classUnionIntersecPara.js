console.log("**************1) Class parameter properties***************\n");
console.log("Use union for multiple types");
var va;
va = 3224;
console.log(va);
va = "Hitesh";
console.log(va);
va = [34, 54, 56, 34];
console.log(va);
va = ["Apple", "Guavava", "Jackfruits"];
console.log(va);
va = {
    Name: "Hitesh",
    age: 23,
    address: "Pune"
};
console.log(va);
console.log("\nUsing function\n");
function unionTest(data) {
    var box = '';
    if (typeof data == "string") {
        console.log("Given data is ".concat(data, " so, it is string"));
    }
    else if (typeof data === "number") {
        console.log("Given data is ".concat(data, " so, it is number"));
    }
    else if (typeof data === "boolean") {
        console.log("Given data is ".concat(data, " so, it is boolean"));
    }
    else if (typeof data === "object") {
        // box = data.map(x => x.trim()).join(' ');
        console.log("Given data is ".concat(data, " so, it is object"));
    }
    return box;
}
console.log(unionTest("Hitesh"));
console.log(unionTest(123));
console.log(unionTest(true));
console.log(unionTest(["[Hitesh ", " hello]"]));
console.log(unionTest([23, 55, 345, 76]));
console.log("**************2) Class parameter properties**************");
var Employee = /** @class */ (function () {
    function Employee(name, age, emailaddress, phoneNum) {
        this.name = name;
        this.age = age;
        this.emailaddress = emailaddress;
        this.phoneNum = phoneNum;
    }
    return Employee;
}());
var stud1 = new Employee("Hitesh", 25, "Hiteshghadage08@gmai.com", 898343454);
console.log("Student name is: ".concat(stud1.name, "\nStudent age is ").concat(stud1.age, ".\nStudent emailID is: ").concat(stud1.emailaddress, ".\nStudent phone number is: ").concat(stud1.phoneNum));
console.log(stud1);
console.log("**************3) Intersection Type**************");
var Employee1 = {
    name: "Hitesh",
    email: "hiteshghadage@gmail.com",
    phone: 56467433
};
function contact(details2) {
    console.log("Dear \"".concat(details2.name, "\".\nyour email ID is \"").concat(details2.email, "\".\nand your contact number \"").concat(details2.phone, "\""));
}
contact(Employee1);
console.log("**************4) Optional parameters**************");
function display(name, age, emailID, status) {
    console.log("Name of Student ".concat(name));
    console.log("running age is ".concat(age));
    console.log("EmailID is ".concat(emailID));
    if (status != undefined) {
        console.log("Is Married", status);
    }
}
display("Hitesh", 25, "hiteshgha@gmail.com", "No");
console.log("");
display("Rohan", 30, "Rohan@gmail.com");
console.log("");
display("Rakesh", 27, "Rakeshdhs@gmail.com", "Yes");
