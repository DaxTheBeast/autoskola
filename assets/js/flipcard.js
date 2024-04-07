$(document).ready(function() {
  $('.cardflip').mouseenter(function() {
    $(this).addClass('is-flipped');
  }).mouseleave(function() {
      $(this).removeClass('is-flipped');
  });
});