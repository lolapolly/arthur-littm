
$("#menu-link").on("click", function(e) {
  e.preventDefault();
  $(".menu-container").toggleClass('is-menu-open')
  $(".menu-content").toggleClass('is-content-open')
});

function getConfig(icon) {
  // about / money / fun / letter
  if (icon == "money") {
    var img = "https://mbtskoudsalg.com/images/coin-png.png"
  } else if (icon == "fun") {
    var img = "https://images.vexels.com/media/users/3/127125/isolated/preview/5f33b9a2460731d6b3efd7ed80e5f9a7-beachball-icon-by-vexels.png"
  } else if (icon == "letter") {
    var img = "http://icons.iconarchive.com/icons/webalys/kameleon.pics/256/Love-Letter-icon.png"
  } else {
    var img = "https://cdn.shopify.com/s/files/1/1061/1924/files/Sunglasses_Emoji.png"
  }
  var config = {
    "particles": {
      "number": {
        "value": 20,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "image",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": img,
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 20,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 5,
        "direction": "bottom",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  };
  return config
};

function handleIn() {
  $("#particles-js canvas").remove();
  var icon = $(this).data("icon")
  var id = $(this).data("id")
  console.log(icon)
  particlesJS(id, getConfig(icon));
};

function handleOut() {
  $("canvas").remove();
};


$(".menu-section").hover(handleIn, handleOut);
