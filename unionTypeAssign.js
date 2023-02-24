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
function unionTest(data) {
    var box = '';
    if (typeof data == "string") {
        console.log("Given data is ".concat(data, " so, it is string"));
        box = data.trim();
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
}
console.log(unionTest("Hitesh"));
console.log(unionTest(123));
console.log(unionTest(true));
console.log(unionTest(["Hitesh ", " hello"]));
console.log(unionTest([23, 55, 345, 76]));
