var a : string
a = "Apply";
console.log(a);



// true if the input string is a palindrome
export function isPalindromessss(str: string): boolean {
    return str === str.split('').reverse().join('');
}