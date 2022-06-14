/* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 380,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
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
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
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
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
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
});


/* ---- stats.js config ---- */

var count_particles, stats, update;
//   stats = new Stats;
//   stats.setMode(0);
//   stats.domElement.style.position = 'absolute';
//   stats.domElement.style.left = '0px';
//   stats.domElement.style.top = '0px';
//   document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function () {
  // stats.begin();
  // stats.end();
  // if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
  //   count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  // }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);

var controls = document.querySelectorAll('.play-pause');

controls.forEach(control => {
  control.addEventListener("click", () => playPause(control));
})

function playPause(controlBtn) {
  const parent = controlBtn.closest(".play-and-pause");
  const track = parent.querySelector(".track")

  const allTracks = document.querySelectorAll(".track")
  const allButtons = document.querySelectorAll(".play-pause")

  Array.from(allTracks).filter(tr => {
    return tr != track
  }).forEach(tr => {
    tr.pause();
    tr.currentTime = 0;
  })

  Array.from(allButtons).filter(btn => {
    return btn != controlBtn
  }).forEach(btn => {
    btn.classList.remove("pause");
    btn.classList.add("play");
  })



  if (track.paused) {
    track.play().catch(() => {});
    //controlBtn.textContent = "Pause";
    controlBtn.classList.remove("play");
    controlBtn.classList.add("pause");
  } else {
    track.pause();
    //controlBtn.textContent = "Play";
    controlBtn.classList.remove("pause");
    controlBtn.classList.add("play");
  }
}

// track.addEventListener("ended", function() {
//   controlBtn.className = "play";
// });