function playSound(e) 
{
const key = e.type === 'keydown' ? e.keyCode : this.getAttribute('data-key');
const audio = document.querySelector(`audio[data-key="${key}"]`);
const button = document.querySelector(`.drum-pad[data-key="${key}"]`);  
if (!audio) return; 
audio.currentTime = 0; 
audio.play();
button.classList.add('pressed');
setTimeout(() => button.classList.remove('pressed'), 100);
}
window.addEventListener('keydown', playSound);
const buttons = document.querySelectorAll('.drum-pad');
buttons.forEach(button => button.addEventListener('click', playSound));
  