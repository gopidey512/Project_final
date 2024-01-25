/**
   * Mobile nav toggle
   */
 const mobileNavToogle = document.querySelector('.mobile-nav-toggle');
 if (mobileNavToogle) {
   mobileNavToogle.addEventListener('click', function(event) {
     event.preventDefault();

     document.querySelector('body').classList.toggle('mobile-nav-active');

     this.classList.toggle('bi-list');
     this.classList.toggle('bi-x');
   });
 }

 /**
  * Toggle mobile nav dropdowns
  */
 const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

 navDropdowns.forEach(el => {
   el.addEventListener('click', function(event) {
     if (document.querySelector('.mobile-nav-active')) {
       event.preventDefault();
       this.classList.toggle('active');
       this.nextElementSibling.classList.toggle('dropdown-active');

       let dropDownIndicator = this.querySelector('.dropdown-indicator');
       dropDownIndicator.classList.toggle('bi-chevron-up');
       dropDownIndicator.classList.toggle('bi-chevron-down');
     }
   })
 });
