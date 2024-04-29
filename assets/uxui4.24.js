document.querySelector('#AccessibleNav > li.nav__item.nav__item--compress').addEventListener('change', function() {
     var accessibleNav = document.querySelector('#AccessibleNav');
  console.log("TEST")
   if (accessibleNav.classList.contains('nav--compress')) {
      container.style.left = '23px !important';
      container.style.top = '14px !important';
    }
  });




