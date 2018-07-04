$(document).ready(function(){
  slider();
});


function slider(){
  $next = $('.slider-control-next'),
  $prev = $('.slider-control-prev'),
  $row1Active = $('#row1 img.active'),
  $row2Active = $('#row2 img.active');

 $next.click(function(){
    $('#row1 img:last-child, #row2 img:last-child').css({
      left: '200px'
    });

    setTimeout(function(){
      $('#row1 img:last-child, #row2 img:last-child').css({
        left: '0px'
      });
      $('#row1 img:last-child').insertBefore('#row1 img:first-child');
      $('#row2 img:last-child').insertBefore('#row2 img:first-child');
    }, 400);
    
 });
}