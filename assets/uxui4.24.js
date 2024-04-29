$('.nav__item--compress').on('change', function() {
  if ($(this).is(':checked')) {
    $('.container').removeClass('compress-hidden');
  } else {
    $('.container').addClass('compress-hidden');
  }
});
