$('.nav__item--compress').on('change', function() {
  if ($(this).is(':checked')) {
    $('.center-item-count').css('left', '23px !important');
    $('.center-item-count').css('top', '14px !important');
  }
});
