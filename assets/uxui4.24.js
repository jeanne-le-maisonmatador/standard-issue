window.addEventListener('resize', function() {
  container = document.querySelector('.center-item-count');
   if (document.querySelector('#AccessibleNav').classList.contains('nav--compress')) {
     console.log("TESTSTEST")
      container.style.left = '23px !important';
      container.style.top = '14px !important';
    }
  });

