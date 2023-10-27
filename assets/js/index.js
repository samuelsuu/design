
// document.getElementById("ui").oninput = function() {
//     var value = (this.value-this.min)/(this.max-this.min)*100
//     this.style.background = 'linear-gradient(to right, #DC3635 0%,  #DC3635 ' + value + '%, #fff ' + value + '%, white 100%)'
//   };
  
document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
    const navList = document.querySelector(".nav-list");
  
    mobileMenuToggle.addEventListener("click", function () {
      navList.classList.toggle("show-mobile-menu");
    });
  });
  