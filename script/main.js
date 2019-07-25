

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return; //if no "audio" is assigned to the "pressed" key, this stops the function until a key with an assigned audio file is pressed.
  audio.currentTime = 0; //sets the start of the audio
  audio.play(); //plays the sound
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;//it skips anything that is not "transform"
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
