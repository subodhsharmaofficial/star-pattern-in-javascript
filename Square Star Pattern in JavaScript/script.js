"use strict";

/*Square Star Pattern

*****
*****
*****
*****
*****

*/

//Solution:
// Number of stars in each row is 5
// Number of rows is also 5

let n = 5; // Number of Rows or Columns
let string = "";

for (let row = 1; row <= n; row++) {
  for (let column = 1; column <= n; column++) {
    string = string + "*"; //string+='*';
  }
  string = string + "\n"; //string+='\n';
}

console.log(string);
