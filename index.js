'use strict';
// function inArray(array1,array2) {
//   return array1.filter(function sMatch(s) {
//     if (array2.join(' ').match(new RegExp(s, 'i'))) {
//       return array2.join(' ').match(new RegExp(s, 'i'))[0];
//     }
//   }).sort();
// }
function inArray(array1,array2) {
  return array1.filter( function arrFilter (f) {
    if (array2.some( function arrSome (s) {
       return s === f;
      }))
    {
      return f;
    }
  }).sort();

  }



console.log(inArray (["om", "sharp", "o"],
  ["lively", "alive", "harp", "sharp", "armstrong"]));



// var isSquare = function(n){
//
//   // if (Math.sqrt(n) - Math.sqrt(n) % 1 === Math.sqrt(n)) {
//   //   return true;
//   // }
//   // return false; // fix me
//   return Math.sqrt(n) % 1 === 0;
//
// };
//
// console.log(isSquare(4));


// function getCount(str) {
//   var vowelsCount = 0;
//   var ch = str.split('');
//   for (var i = 0; i < ch.length; i++) {
//     if (ch[i] === 'a' || ch[i] === 'e' || ch[i] === 'i' ||
//       ch[i] === 'o' || ch[i] === 'u') {
//     vowelsCount++;
//     }
//   }
//   return vowelsCount;
// }
// getCount('hello');




// www.codewars.com task#1 ----------------------------------
// persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                       // and 4 has only one digit
//
// persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                        // 1*2*6 = 12, and finally 1*2 = 2
//
// persistence(4) === 0 // because 4 is already a one-digit number

// My
// function persistence(num) {
  // var p;
  // var numAr = [[], []];
  // num = String(num);
  // numAr[0] = num.split('');
  // for (var j = 0; j < numAr[0].length + 10; j++) {
  //   num = String(num);
  //   numAr[j] = num.split('');
  //   p = num;
  //   num = 1;
  //   for (var i = 0; i < numAr[j].length; i++) {
  //     num = num * Number(numAr[j][i]);
  //   }
  //   if (Number(p) === num){
  //     return console.log('res',j);
  //   }
  //   console.log(num);
  // }
  // return console.log(j);
// }

// Original
// function persistence(num) {
//   var times = 0;
//
//   num = num.toString();
//
//   while (num.length > 1) {
//     times++;
//     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
//   }
//   return times;
// }

// persistence(27);