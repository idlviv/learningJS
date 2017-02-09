/**
 * Created by igor on 09.02.17.
 */

$(document).ready(function() {
  $('#blockDivs').click(function(e) {
    // var bigDivC = document.querySelector('#Div6');
    // bigDivC.style.backgroundColor = e.target.classList.style.backgroundColor;
    var model = $('#div6');
    model.css('left', '300px');
    model.css('background-color', $(e.target).css('background-color'));
    model.fadeIn(1000);
    
    console.log(e.target);
    console.log($(e.target));
    console.log(this);
    console.log($(this));
    // var model = $(this);

    // var color = $(this).target;
    // console.log($(e),$(this));
  });
  $('#div6').on('click', function() {
    $(this).fadeOut(1000);
  });
});
