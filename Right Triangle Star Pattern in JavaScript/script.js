"use strict";

/*Right Triangle Star Pattern

*
**
***
****
*****

*/

//Solution:

let n = 5;
let string = "";

for (let row = 1; row <= n; row++) {
  for (let column = 1; column <= row; column++) {
    string = string + "*"; //string+='*';
  }
  string = string + "\n"; //string+='\n';
}

console.log(string);

