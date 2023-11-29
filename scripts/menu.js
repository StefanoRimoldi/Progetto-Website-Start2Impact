document.addEventListener('DOMContentLoaded', function() {
  const openMenu = document.querySelector('.open-menu');
  const closeMenu = document.querySelector('.close-menu');
  const menuCheckbox = document.getElementById('check');
  const menuLinks = document.querySelectorAll('.menu li a');
  const backBtn = document.querySelector('.back-btn');

  openMenu.addEventListener('click', function() {
      openMenu.style.display = 'none';
      closeMenu.style.display = 'block';
  });

  closeMenu.addEventListener('click', function() {
      closeMenu.style.display = 'none';
      openMenu.style.display = 'block';
      menuCheckbox.checked = false;
      menuCheckbox.dispatchEvent(new Event('change'));
  });

  menuLinks.forEach(function(link) {
      link.addEventListener('click', function() {
          if (window.innerWidth <= 610) {
              menuCheckbox.checked = false;
              closeMenu.style.display = 'none';
              openMenu.style.display = 'block';
              menuCheckbox.dispatchEvent(new Event('change'));
          }
      });
  });

  menuCheckbox.addEventListener('change', function() {
      if (menuCheckbox.checked) {
          openMenu.style.display = 'none';
          closeMenu.style.display = 'block';
      } else {
          openMenu.style.display = 'block';
          closeMenu.style.display = 'none';
      }
  });

  document.addEventListener('click', function(event) {
      if (window.innerWidth <= 610 && !event.target.closest('.nav-bar')) {
          menuCheckbox.checked = false;
          closeMenu.style.display = 'none';
          openMenu.style.display = 'block';
          menuCheckbox.dispatchEvent(new Event('change'));
      }
  });

  window.addEventListener('resize', function() {
      if (window.innerWidth > 610) {
          openMenu.style.display = 'none';
          closeMenu.style.display = 'none';
      } else {
          if (!menuCheckbox.checked) {
              openMenu.style.display = 'block';
              closeMenu.style.display = 'none';
          } else {
              openMenu.style.display = 'none';
              closeMenu.style.display = 'block';
          }
      }
  });

  backBtn.addEventListener('click', function() {
      menuCheckbox.checked = false;
      if (window.innerWidth <= 610) {
          closeMenu.style.display = 'none';
          openMenu.style.display = 'block';
          menuCheckbox.dispatchEvent(new Event('change'));
      }
  });
});





  
  
  