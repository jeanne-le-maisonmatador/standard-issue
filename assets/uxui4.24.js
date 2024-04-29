window.addEventListener('resize', function() {
  container = document.querySelector('.center-item-count');
   if (document.querySelector('#AccessibleNav').classList.contains('nav--compress')) {
     container.style.cssText = 'left: 23px; top: 14px;';
  } else {
    container.style.cssText = ''; // Remove inline styles
  }
  });

