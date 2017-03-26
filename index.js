'use strict';
window.addEventListener('load', function() {

  // Hiding text
  var btnHide = document.querySelector('#btnHide');
  var textToHide = document.querySelector('#textHide');
  btnHide.addEventListener('click', function() {
    textToHide.classList.toggle('hide');
  });

  // Hiding list
  var labelHide = document.querySelector('#labelHide');
  var listToHide = document.querySelector('#listToHide');

  labelHide.addEventListener('click', function() {
    var str = labelHide.textContent;
    // labelHide.textContent =
    var p = str.slice(2);
    console.log(p);
    console.log(str.slice(0, 4));
    console.log(str);
    // var p1 = str.substring(2);
    // console.log(p1);
    // console.log(str.substring(0, 4));
    // console.log(str);


  });

});
