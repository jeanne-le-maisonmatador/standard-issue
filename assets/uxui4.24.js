window.addEventListener('resize', function() {
  console.log("TeST")
  container = document.querySelector('#AccessibleNav > li.nav__item');
   if (document.querySelector('#AccessibleNav').classList.contains('nav--compress')) {
      container.style.left = '23px !important';
      container.style.top = '14px !important';
    }
  });

