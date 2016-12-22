// *************************************
//
//   Custom Video Player
//   -> Description
//
// *************************************

function customVideoPlayer() {

  // -------------------------------------
  //   Private Variables
  // -------------------------------------

  const player = document.querySelector('.player');
  const video = player.querySelector('.viewer');
  const playToggle = player.querySelector('.toggle');
  const ranges = player.querySelectorAll('.player__slider');

  // -------------------------------------
  //   Set Event Handlers
  // -------------------------------------

  video.addEventListener('click', togglePlay);
  playToggle.addEventListener('click', togglePlay);
  video.addEventListener('play', updateButton);
  video.addEventListener('pause', updateButton);
  ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
  ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

  // -------------------------------------
  //   Functions
  // -------------------------------------

  function togglePlay () {

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }

  }

  function updateButton () {
    const icon = this.paused ? '►' : '❚ ❚';
    console.log(icon);
    playToggle.textContent = icon;
  }

  function handleRangeUpdate () {
    video[this.name] = this.value;
  }

}

// -------------------------------------
//   Initialize
// -------------------------------------

customVideoPlayer();
