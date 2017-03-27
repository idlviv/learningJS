'use strict';
window.addEventListener('load', function() {

  // Hiding text
  var btnHide = document.querySelector('#btnHide');
  var textToHide = document.querySelector('#textToHide');

  btnHide.addEventListener('click', function() {
    textToHide.classList.toggle('hide');
  });

  // Hiding list
  var labelHide = document.querySelector('#labelHide');
  var sweets = document.querySelector('#sweets');

  labelHide.addEventListener('click', function() {
    sweets.classList.toggle('open');
  });

  // Hiding pane
  var removeButton = document.querySelectorAll('.remove-button');
  for (var i = 0; i < removeButton.length; i++) {
    removeButton[i].addEventListener('click', function(e) {
      e.target.parentNode.classList.add('hide');
    });
  }

});
