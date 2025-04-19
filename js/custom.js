
  (function ($) {
  
  "use strict";

    // NAVBAR
    $('.navbar-nav .nav-link').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    // CUSTOM LINK 
    $('.custom-link').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height() + 10;

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
  }
});
    
  })(window.jQuery);


  document.addEventListener("DOMContentLoaded", function () {
    const filterItems = document.querySelectorAll(".filter-item");
    const galleryItems = document.querySelectorAll(".gallery-item");
    const previewBox = document.querySelector(".fullscreen-preview");
    const previewImg = previewBox.querySelector("img");
    const closeIcon = previewBox.querySelector(".close-icon");
    const overlay = document.querySelector(".preview-overlay");
  
    // Filter Functionality
    filterItems.forEach((item) => {
      item.addEventListener("click", function () {
        document.querySelector(".filter-item.active").classList.remove("active");
        item.classList.add("active");
  
        let filterName = item.getAttribute("data-name");
        galleryItems.forEach((image) => {
          let imageCategory = image.getAttribute("data-name");
          if (filterName === "all" || filterName === imageCategory) {
            image.classList.remove("hidden");
            image.classList.add("visible");
          } else {
            image.classList.remove("visible");
            image.classList.add("hidden");
          }
        });
      });
    });
  
    // Image Preview Functionality
    galleryItems.forEach((item) => {
      item.addEventListener("click", function () {
        let imgSrc = item.querySelector("img").src;
        previewImg.src = imgSrc;
        previewBox.classList.add("show");
        overlay.classList.add("show");
      });
    });
  
    // Close Preview
    closeIcon.addEventListener("click", function () {
      previewBox.classList.remove("show");
      overlay.classList.remove("show");
    });
  
    overlay.addEventListener("click", function () {
      previewBox.classList.remove("show");
      overlay.classList.remove("show");
    });
  });
  