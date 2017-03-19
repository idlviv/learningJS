'use strict';
// Not finished Breadcrumb Generator
function cutAnchorParameters(url, symbol) {
  var tmp;
  tmp = url.split(symbol);
  tmp.splice(tmp.length - 1, 1);
  return tmp.join('');
}

function generateBC(url, separator) {
  var arrUrl = [];
  var link = [];
  var last = false;
  var arrUrlLast;
  var arrExtensions = ['html', 'htm', 'php', 'asp'];
  var newItem;

  if (url.includes('#')) {
    url = cutAnchorParameters(url, '#');
  }
  if (url.includes('?')) {
    url = cutAnchorParameters(url, '#');
  }

  arrUrl = url.split('/');
  arrUrl.splice(0, 1);

  // console.log(arrUrl);
  link.push('<a href="/">HOME</a>');
  arrUrl.forEach(function(item, idx) {
    // newItem = item;
    if (arrUrl.length === idx + 1) {
      last = true;
    }
    if (last) {
      if (item.includes('.')) {
        arrUrlLast = item.split('.');
        // console.log('arrUrlLast', arrUrlLast);
        if (arrExtensions.indexOf(arrUrlLast[arrUrlLast.length - 1]) >= 0) {
          arrUrlLast.splice(arrUrlLast.length - 1, 1);
          // console.log('new arrUrlLast', arrUrlLast);
        }
        item = arrUrlLast.join('');
      }
    }

    link.push(separator, '<a href="/', item, '/">', item.toUpperCase(), '</a>');
  });
  console.log(link.join(''));
  return link;
}

generateBC("mysite.com/pictures/holidays.html", " : "); // '<a href="/">HOME</a> : <a href="/pictures/">PICTURES</a> : <span class="active">HOLIDAYS</span>')
generateBC("www.codewars.com/users/GiacomoSorbi", " / "); // '<a href="/">HOME</a> / <a href="/users/">USERS</a> / <span class="active">GIACOMOSORBI</span>')
generateBC("www.microsoft.com/important/confidential/docs/index.htm#top", " * "); // '<a href="/">HOME</a> * <a href="/important/">IMPORTANT</a> * <a href="/important/confidential/">CONFIDENTIAL</a> * <span class="active">DOCS</span>')
generateBC("mysite.com/very-long-url-to-make-a-silly-yet-meaningful-example/example.asp", " > "); // '<a href="/">HOME</a> > <a href="/very-long-url-to-make-a-silly-yet-meaningful-example/">VLUMSYME</a> > <span class="active">EXAMPLE</span>')
generateBC("www.very-long-site_name-to-make-a-silly-yet-meaningful-example.com/users/giacomo-sorbi", " + "); // '<a href="/">HOME</a> + <a href="/users/">USERS</a> + <span class="active">GIACOMO SORBI</span>')

// var User = function() {
//   this.progress = 0;
//   this.ranks = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8];
//   this.rankPosition = 0;
//   this.rank = this.ranks[this.rankPosition];
// };
//
// function UserException(message) {
//   this.message = message;
//   this.name = "My exception";
// }
//
// function checkProgress(p, self) {
//   var incRank;
//   var incProgress;
//   // console.log(self);
//   if (p >= 100) {
//     console.log(p);
//     incProgress = p % 100;
//     incRank = (p - incProgress) / 100;
//     self.progress = incProgress;
//     self.rankPosition += incRank;
//     console.log(self.rankPosition);
//     self.rank = self.ranks[self.rankPosition];
//   }
//
//   if (self.rank >= 8) {
//     self.rank = 8;
//     self.progress = 0;
//   }
// }
//
// User.prototype.incProgress = function(p) {
//   // var self = this;
//   if (!(this.ranks.indexOf(p) >= 0)) {
//     throw new UserException("Wrong rank");
//     return;
//   }
//   var dif;
//   var inc;
//
//   if (p === this.rank) {
//     this.progress += 3;
//     console.log('3', this.progress);
//     checkProgress(this.progress, this);
//   }
//   if (this.ranks.indexOf(p) < this.ranks.indexOf(this.rank) &&
//     this.ranks.indexOf(this.rank) - this.ranks.indexOf(p) < 2) {
//     this.progress += 1;
//     console.log('1', this.progress);
//     checkProgress(this.progress, this);
//
//   }
//   if (p > this.rank) {
//     dif = this.ranks.indexOf(p) - this.ranks.indexOf(this.rank);
//     // dif = p - this.rank.position;
//     inc = dif * dif * 10;
//     this.progress += inc;
//     checkProgress(this.progress, this);
//   }
//   // this.rank = this.ranks[this.rankPosition];
//
//   console.log('rank ', this.rank, ' progress ', this.progress, ' position ', this.rankPosition);
//
// };
//
// var user = new User();
//
// try {
//   user.incProgress(-9);
// } catch (e) {
//   console.log(e.message);
// }
//

// var strFormat = [];
//
// function formatDuration(seconds) {
//   if (!seconds){
//     return 'now';
//   }
//   var sec;
//   var min = 0;
//   var minutes;
//   var hou = 0;
//   var hours;
//   var day = 0;
//   var days;
//   var years = 0;
//   var digFormat = [];
//
//   var output;
//
//   if (seconds >= 60) {
//     sec = seconds % 60;
//     minutes = (seconds - sec) / 60;
//
//     if (minutes >= 60) {
//       min = minutes % 60;
//       hours = (minutes - min) / 60;
//
//       if (hours >= 24) {
//         hou = hours % 24;
//         days = (hours - hou) / 24;
//
//         if (days >= 365) {
//           day = days % 365;
//           years = (days - (day)) / 365;
//         } else {
//           day = days;
//         }
//
//       } else {
//         hou = hours;
//       }
//
//     } else {
//       min = minutes;
//     }
//
//   } else {
//     sec = seconds;
//   }
//
//   digFormat.push(years, day, hou, min, sec);
//   print(digFormat, 0, 'year');
//   print(digFormat, 1, 'day');
//   print(digFormat, 2, 'hour');
//   print(digFormat, 3, 'minute');
//   print(digFormat, 4, 'second');
//   output = strFormat.join('');
//   strFormat = [];
//   console.log(output);
//   return output;
// }
// function print(arr, index, period) {
//   var notLast = false;
//   var beforeLast = false;
//   var c = 0;
//   var conPlural = 's';
//   var conComma = ', ';
//   var conAnd = ' and ';
//
//   if (arr[index]) {
//     for (var i = index + 1; i < arr.length; i++) {
//       if (arr[i]) {
//         notLast = true;
//         c += 1;
//       }
//     }
//
//     if (c === 1) {
//       beforeLast = true;
//     }
//
//     strFormat.push(arr[index], ' ', period);
//     if (arr[index] > 1) {
//       strFormat.push(conPlural);
//     }
//     if (beforeLast) {
//       strFormat.push(conAnd);
//     }
//     if (notLast && !beforeLast) {
//       strFormat.push(conComma);
//     }
//
//   }
// }
//
// formatDuration(1); // "1 second";
// strFormat = [];
// formatDuration(62); // "1 minute and 2 seconds");
// strFormat = [];
// formatDuration(120); // "2 minutes");
// strFormat = [];
// formatDuration(3600); // "1 hour");
// strFormat = [];
// formatDuration(36620000000); // "1 hour, 1 minute and 2 seconds");

// function isSolved(board) {
//   var winner;
//   var zero = false;
//   for (var j = 0; j < 3; j++) {
//     // console.log(board[0][j], board[1][j], board[2][j]);
//     if (board[0][j] === board[1][j] && board[1][j] === board[2][j] && board[0][j] !== 0) {
//       winner = board[0][j];
//     }
//     // console.log(board[j][0], board[j][1], board[j][2]);
//     if (board[j][0] === board[j][1] && board[j][1] === board[j][2] && board[j][0] !== 0) {
//       winner = board[j][0];
//     }
//   }
//   if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== 0) {
//     winner = board[0][0];
//   }
//   if (board[2][0] === board[1][1] && board[1][1] === board[0][2] && board[2][0] !== 0) {
//     winner = board[2][0];
//   }
//   for (var i = 0; i < 3; i++) {
//     for (var j = 0; j < 3; j++) {
//       if (board[i][j] === 0) {
//         zero = true;
//       }
//     }
//   }
//
//   if (winner) {
//     return winner;
//   } else {
//     if (zero) {
//       console.log('not fin');
//       return -1;
//     } else {
//       console.log('draw');
//       return 0;
//     }
//   }
// }
//
// console.log(isSolved(
//   [[0,0,1],
//     [0,1,2],
//     [2,1,0]
//   ]));
//
// console.log(isSolved(
//   [[2,2,2],
//     [0,1,2],
//     [2,1,0]
//   ]));
