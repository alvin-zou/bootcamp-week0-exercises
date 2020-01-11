/**
 * Part 1:
 *    What will print and why?
 *    1, 2, undefined. Line 27 prints 1, then line 28 runs y. Then, line 22 prints 2 
 *    and line 23 runs x. Finally, line 18 prints undefined.
 *    What will change if we delete line 15? Why?
 *    It will print 1 instead of undefined for the third console.log, because a is a global variable 
 *    so its redefinition inside of the y function does not affect it globally.
 * 
 * Part 2:
 *    Change to ES6 syntax (use arrow functions and change var to let).
 * 
 * Part 3:
 *    Modify the code so that it prints 1, 2, 2, in that order. Do not move
 *        console logs.
 */

const x = () => {
  let a = 2;
  console.log(a);
}


const y = () => {
  let a = 2;
  console.log(a);
  x();
}


let a = 1;
console.log(a);
y();
