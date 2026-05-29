window.HELP_IMPROVE_VIDEOJS = false;

const INTERP_BASE = "./static/interpolation/stacked";
const NUM_INTERP_FRAMES = 240;

const interpImages = [];
function preloadInterpolationImages() {
  for (let i = 0; i < NUM_INTERP_FRAMES; i++) {
    const path = INTERP_BASE + "/" + String(i).padStart(6, "0") + ".jpg";
    interpImages[i] = new Image();
    interpImages[i].src = path;
  }
}

function setInterpolationImage(i) {
  const wrapper = document.getElementById("interpolation-image-wrapper");
  const image = interpImages[i];

  if (!wrapper || !image) {
    return;
  }

  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  wrapper.replaceChildren(image);
}


document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".navbar-burger").forEach(function(burger) {
      burger.addEventListener("click", function() {
        document.querySelectorAll(".navbar-burger, .navbar-menu").forEach(function(element) {
          element.classList.toggle("is-active");
        });
      });
    });

    const options = {
			slidesToScroll: 1,
			slidesToShow: 3,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

		// Initialize all div with carousel class
    const carousels = window.bulmaCarousel ? bulmaCarousel.attach(".carousel", options) : [];

    // Loop on each carousel initialized
    for(let i = 0; i < carousels.length; i++) {
    	// Add listener to  event
    	carousels[i].on("before:show", state => {
    		console.log(state);
    	});
    }

    // Access to bulmaCarousel instance of an element
    const element = document.querySelector("#my-element");
    if (element && element.bulmaCarousel) {
    	// bulmaCarousel instance is available as element.bulmaCarousel
    	element.bulmaCarousel.on("before-show", function(state) {
    		console.log(state);
    	});
    }

    /*var player = document.getElementById('interpolation-video');
    player.addEventListener('loadedmetadata', function() {
      $('#interpolation-slider').on('input', function(event) {
        console.log(this.value, player.duration);
        player.currentTime = player.duration / 100 * this.value;
      })
    }, false);*/

    const interpolationSlider = document.getElementById("interpolation-slider");
    const interpolationWrapper = document.getElementById("interpolation-image-wrapper");
    if (interpolationSlider && interpolationWrapper) {
      preloadInterpolationImages();
      interpolationSlider.addEventListener("input", function() {
        setInterpolationImage(this.value);
      });
      interpolationSlider.max = NUM_INTERP_FRAMES - 1;
      setInterpolationImage(0);
    }

    if (window.bulmaSlider) {
      bulmaSlider.attach();
    }

})
