$(document).ready(function () {
  nextClickHandler();
  prevClickHandler();
  hoverControlHandler();
  sliderWidth();
});
var $leftPos = 0;

function nextClickHandler($leftPos) {

  $('.slider-control-next').click(function () {
    $leftPos = $('.active').width();
    // klasa active u prvom redu
    $active1 = $('#row1 .active');
    // klasa active u drugom redu
    $active2 = $('#row2 .active');
    // sljedeći i prethodni element u prvom i drugom redu
    $prev1 = $active1.prev();
    $next1 = $active1.next();
    $prev2 = $active2.prev();
    $next2 = $active2.next();
    // provjera da li postoji sljedeći element u prvom redu
    if ($next1.length) {

      // makni klasu sa trenutnog elementa
      $('#row1 .slider-img').removeClass('active');
      // dodaj klasu na sljedeći element
      $next1.addClass('active');

    } else {
      // kloniraj aktivnu sliku i postavi ju na prvo mjesto
      $('#row1 .active').clone().insertBefore('#row1 .slider-img:first');
      // obriši zadnju sliku
      $('#row1 .slider-img:last').remove();
      // klasa active je na zadnjem elementu u redu
      $('#row1 .slider-img').removeClass('active');
      $('#row1 .slider-img:first').addClass('active');
    }
    // provjera da li postoji sljedeći element u drugom redu
    if ($next2.length) {
      $('#row2 .slider-img').removeClass('active');
      $next2.addClass('active');
    } else {
      // kloniraj aktivnu sliku i postavi ju na prvo mjesto
      $('#row2 .active').clone().insertBefore('#row2 .slider-img:first');
      // obriši zadnju sliku
      $('#row2 .slider-img:last').remove();
      // makni klasu active sa svih elemenata
      $('#row2 .slider-img').removeClass('active');
      // dodaj klasu active na prvi element
      $('#row2 .slider-img:first').addClass('active');

    }
  });
}

function prevClickHandler() {
  $('.slider-control-prev').click(function () {
    // klasa active u prvom redu
    $active1 = $('#row1 .active');
    // klasa active u drugom redu
    $active2 = $('#row2 .active');
    // sljedeći i prethodni element u prvom i drugom redu
    $prev1 = $active1.prev();
    $next1 = $active1.next();
    $prev2 = $active2.prev();
    $next2 = $active2.next();

    // provjeri da li postoji prethodni element u prvom redu
    if ($prev1.length) {
      // makni .active klasu sa svih elemenata
      $('#row1 .slider-img').removeClass('active');
      // dodaj .active klasu na prethodni element
      $prev1.addClass('active');
    } else {
      // active klasa se nalazi na prvom elementu
      // makni .active klasu sa svih elemenata
      $('#row1 .slider-img').removeClass('active');
      // dodaj .active klasu na posljednji element
      $('#row1 .slider-img:last').addClass('active');
    }
    //provjeri da li postoji prethodni element u drugom redu
    if ($prev2.length) {
      // makni .active klasu sa svih elemenata
      $('#row2 .slider-img').removeClass('active');
      // dodaj .active klasu na prethodni element
      $prev2.addClass('active');
    } else {
      // active klasa se nalazi na prvom elementu
      // makni .active klasu sa svih elemenata
      $('#row2 .slider-img').removeClass('active');
      // dodaj .active klasu na posljednji element
      $('#row2 .slider-img:last').addClass('active');
    }
  });
}

function hoverControlHandler() {
  // promjeni ikonicu u plavo
  $('.slider-control-next').hover(function () {
    $('.slider-control-next img').attr('src', 'assets/arrow-blue-right.png');
  }, function () {
    $('.slider-control-next img').attr('src', 'assets/arrow-gray-right.png');
  });
  // promjeni ikonicu u plavo
  $('.slider-control-prev').hover(function () {
    $('.slider-control-prev img').attr('src', 'assets/arrow-blue-left.png');
  }, function () {
    $('.slider-control-prev img').attr('src', 'assets/arrow-gray-left.png');
  });
}

function sliderWidth() {
  $width1 = 0;
  $width2 = 0;
  $row1Children = $('#row1').children();
  $row2Children = $('#row2').children();
  // petlja preko elemenata u prvom redu
  for ($i = 0; $i < $row1Children.length; $i++) {
    $width1 += $row1Children[$i].width;
  }
  // širina prvog reda
  $('#row1').css({
    width: $width1 + 50
  })
  for ($y = 0; $y < $row2Children.length; $y++) {
    $width2 += $row2Children[$y].width;
  }
  $('#row2').css({
    width: $width2 + 40
  })

}