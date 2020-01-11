const assert = require("assert");

// Feel free to look things up online!

// TODO - write a function which converts a multi-word string into an array of words
const tokenize = str => {
    return str.split(" ");
};

// TODO - write a function which reverses the string
const reverse = str => {
    return str.split("").reverse().join("");
};

// TODO - write a function which returns the inputted array without duplicate elements
const uniqueOnes = arr => {
    const x = new Set(arr);
    return Array.from(x);
};

// TODO - write a function which returns the factorial of a positive integer
const factorial = num => {
    if(num > 1) {
        return num*factorial(num-1);
    } else {
        return 1;
    }
};

// TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
// if the two arrays are of unequal length
// Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
const zip = (arr1, arr2) => {
    if(arr1.length===arr2.length) {
        let x = [];
        for(let i = 0; i<arr1.length; i++) {
            x.push([arr1[i],arr2[i]]);
        }
        return x;
    } else {
        return -1;
    }
};

// TODO - Write a function which does the opposite of `zip()`
const unzip = arr => {
    let newArr = [[],[]];
    for(let i = 0; i<arr.length; i++) {
        newArr[0].push(arr[i][0]);
        newArr[1].push(arr[i][1]);
    }
    return newArr;
};

// TODO - write a function which shifts a string `num` characters to the right
// Example = shiftThree("Hello") === "lloHe"
const shiftRight = (str, num) => {
    let newStr = "";
    for(let i = 0; i<str.length; i++) {
        newStr = newStr.concat(str[(num+i-1)%str.length]);
    }
    return newStr;
};

// TODO - write a function which returns the current date in the following format:
// "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
const announceDate = () => {
    const d = new Date();
    let arr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let digits = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let tn = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let tw = ["twenty", "thirty", "fourty", "fifty"];
    const x = d.getDate();
    const y = d.getHours()%12;
    const z = d.getMinutes();
    let str = "";
    if((x===1)||(x===21)||(x===31)) {
        str += "st";
    } else if((x===2)||(x===22)) {
        str += "nd";
    } else if((x===3)||(x===23)) {
        str += "rd";
    } else {
        str += "th";
    }

    let str2 = "";

    if(d.getHours()<12) {
        str2 += "morning.";
    } else {
        str2 += "afternoon.";
    }

    return "Today's date is " + arr[d.getMonth()] + " " + x + str + ", " + d.getFullYear() + ". It is " + y + ":" + z + " in the " + str2;
};

// Write tests here:
assert(1 < 2);
assert(1 + 2 === 3);
assert([2, 3][0] === 2);
// console.log(tokenize("Hi I am a string"));
// console.log(reverse("Hello"))
// console.log(uniqueOnes([1,2,3,2,3,4]));
// console.log(factorial(5));
// console.log(zip([1, 2, 3], [5, 3, 1]));
// console.log(unzip([ [ 1, 5 ], [ 2, 3 ], [ 3, 1 ] ]));
// console.log(shiftRight("Alvin",3));
console.log(announceDate());
