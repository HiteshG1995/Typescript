var marks1 = Number(prompt("Please enter the marks of Math"));

var marks2 = Number(prompt("Please enter the marks of Physics"));

var marks3 = Number(prompt("Please enter the marks of Chemistry"));

console.log(`Marks of maths is ${marks1}`);
console.log(`Marks of Physics is ${marks2}`);
console.log(`Marks of Chemistry is ${marks3}`);

var avg = (marks1+marks2+marks3)/3

console.log(`Average score is: ${avg}`);

if(avg>90){
    console.log(`Grade is A`)
}else if(avg>70 && avg<90)
    console.log(`Grade is B`)
else if(avg<70){
    console.log(`Grade is C`);
}else{
    console.log(`Please provide details`);
}
    
