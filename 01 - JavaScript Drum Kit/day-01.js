function removeTransition(e) {
  if ( e.propertyName !== 'transform' ) return; // stop if it's not a transform
  this.classList.remove('playing');
};

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return; // Stop if not a key with audio
  audio.currentTime = 0; // Rewind to 0 to allow continual play
  audio.play();
  key.classList.add('playing');

}

// Initialize
const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
