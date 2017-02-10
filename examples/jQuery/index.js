/**
 * Created by igor on 09.02.17.
 */

$(document).ready(function() {

  var $model = $('#div6');
  var $hided = null;
  $('#blockDivs').click(function(e) {
    var $jtarget = $(e.target);
    if ($hided) {
      $hided.css('opacity', '1');
    }
    $model.css({
      'left': $jtarget.offset().left,
      'top': $jtarget.offset().top,
      'height': $jtarget.height(),
      'width': $jtarget.width(),
      'background-color': $jtarget.css('background-color'),
      'opacity': 1,
      'display': 'block',
    });
    $jtarget.css('opacity', '0');
    $hided = $jtarget;

    var n = 1;
    $model
      .animate({
        width: 300,
        height: 300,
      }, {
        duration: 1000,
        queue: false,
        specialEasing: {
          height: 'linear',
          width: 'swing',
        },
        complete: function(){
          console.log('Animation completed');
        },
        step: function(){
          console.log(n++, '- step completed');
          if (n === 60) {
            $model.stop();
          }
        },
      })
      .animate({
        left: 200,
        top: 200
      }, 500);

  });

  $('#div6').on('click', function() {
    $hided.css('opacity', '1');
    // $(this).fadeOut(1000);
    $model.css('left', '300px');
    $model.css('top', '400px');
  });

});
