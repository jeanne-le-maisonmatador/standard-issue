window.addEventListener('resize', function() {
  console.log("TEST")
  container = document.querySelector('#AccessibleNav > li.nav__item.nav__item--compress');
   if (document.querySelector('#AccessibleNav').classList.contains('nav--compress')) {
      container.style.left = '23px !important';
      container.style.top = '14px !important';
    }
  });

