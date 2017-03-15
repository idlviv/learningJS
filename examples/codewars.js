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


var User = function() {
  this.progress = 0;
  this.ranks = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8];
  this.rankPosition = 0;
  this.rank = this.ranks[this.rankPosition];
};

function UserException(message) {
  this.message = message;
  this.name = "My exception";
}

function checkProgress(p, self) {
  var incRank;
  var incProgress;
  // console.log(self);
  if (p >= 100) {
    console.log(p);
    incProgress = p % 100;
    incRank = (p - incProgress) / 100;
    self.progress = incProgress;
    self.rankPosition += incRank;
    console.log(self.rankPosition);
    self.rank = self.ranks[self.rankPosition];
  }

  if (self.rank >= 8) {
    self.rank = 8;
    self.progress = 0;
  }
}

User.prototype.incProgress = function(p) {
  // var self = this;
  if (!(this.ranks.indexOf(p) >= 0)) {
    throw new UserException('Wrong rank');
    return;
  }
  var dif;
  var inc;

  if (p === this.rank) {
    this.progress += 3;
    console.log('3', this.progress);
    checkProgress(this.progress, this);
  }
  if (this.ranks.indexOf(p) < this.ranks.indexOf(this.rank) &&
    this.ranks.indexOf(this.rank) - this.ranks.indexOf(p) < 2) {
    this.progress += 1;
    console.log('1', this.progress);
    checkProgress(this.progress, this);

  }
  if (p > this.rank) {
    dif = this.ranks.indexOf(p) - this.ranks.indexOf(this.rank);
    // dif = p - this.rank.position;
    inc = dif * dif * 10;
    this.progress += inc;
    checkProgress(this.progress, this);
  }
  // this.rank = this.ranks[this.rankPosition];

  console.log('rank ', this.rank, ' progress ', this.progress, ' position ', this.rankPosition);

};

var user = new User();

try {
  user.incProgress(-9);
} catch (e) {
  console.log(e.message);
}