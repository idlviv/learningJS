'use strict';
function getCount(str) {
  var vowelsCount = 0;
  var ch = str.split('');
  console.log(ch);
  for (var i = 0; i < ch.length; i++) {
    // if (ch[i] === 'a' || ch[i] === 'e' || ch[i] === 'i' ||
    //   ch[i] === 'o' || ch[i] === 'u') {
    if (ch[1]){
    vowelsCount += vowelsCount;
    }
  }
  console.log(vowelsCount);
  console.log(ch[0]);
  return vowelsCount;
}
getCount('hello');