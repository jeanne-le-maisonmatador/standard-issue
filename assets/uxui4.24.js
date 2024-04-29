document.querySelector('#AccessibleNav').addEventListener('resize', function() {
  container = document.querySelector('#AccessibleNav > li.nav__item.nav__item--compress');
  console.log("TEST");
   if (this.classList.contains('nav--compress')) {
      container.style.left = '23px !important';
      container.style.top = '14px !important';
    }
  });




