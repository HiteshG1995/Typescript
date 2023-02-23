var sn: string | number;

sn = 'codemind';
sn = 100; 

type Test = string | string[]    //| number | number[];

function formatCommandLine(input: Test) {
    let line = '';
    if (typeof input === 'string') {
        line = input.trim();
    }
     
    else {
        line = input.map(x => x.trim()).join(' ');
    }
    return line;
}


console.log(formatCommandLine('hello ')); // hello
console.log(formatCommandLine(['hello ', 'world '])); // helloword
// console.log(formatCommandLine(123457));

class Person1 {
    public fname: string;
    public age: number;

    // parameterised constructor .
    constructor(fname: string, age: number) {
        this.fname = fname;
        this.age = age;
    }
}

const jack = new Person1('Jack', 30);
console.log(jack.fname, jack.age);




class Person2 {
  

    // parameterised constructor .
    constructor(public fname: string, public age: number) {
        
    }
}

const smith = new Person2('smith', 30);
console.log(smith.fname, smith.age);