// Initialize ScrollMagic controller
var controller = new ScrollMagic.Controller();

// Create scenes for fading images in and out
var imageCells = document.querySelectorAll(".image-cell");
imageCells.forEach(function (cell, index) {
  var fadeScene = new ScrollMagic.Scene({
    triggerElement: cell,
    triggerHook: 0.8,
  })
    .on("enter", function () {
      gsap.to(cell.querySelector("img"), {
        opacity: 1,
        duration: 0.5,
        delay: index * 0.2,
      });

      cell.classList.add("active"); // Add the "active" class to change background color
    })
    .on("leave", function () {
      gsap.to(cell.querySelector("img"), { opacity: 0, duration: 0.5 });

      cell.classList.remove("active"); // Remove the "active" class to reset background color
    })
    .addTo(controller);
});

// Scaling image effect
var scalingImage = document.querySelector(".scaling-image img");
var scalingScene = new ScrollMagic.Scene({
  triggerElement: ".scaling-section",
  triggerHook: 0,
  duration: "200%", // Adjust the duration for the desired scaling range
})
  .on("progress", function (e) {
    var scaleValue = 1 + e.progress; // Adjust the scale factor as needed
    gsap.to(scalingImage, { scale: scaleValue });
  })
  .addTo(controller);

// Sticky navigation
$(document).ready(function () {
  $(window).bind("scroll", function () {
    var navHeight = $(window).height() - 70;
    if ($(window).scrollTop() > navHeight) {
      $("nav").addClass("fixed");
    } else {
      $("nav").removeClass("fixed");
    }
  });
});
