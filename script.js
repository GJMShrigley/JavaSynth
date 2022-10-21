const keys = document.querySelectorAll(".key");

function handleKeyDown(e) {
    e.preventDefault();
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    audio.currentTime = 0;
    audio.play();
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    key.classList.add('playing');   
}

function handleKeyUp(e) {
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    key.classList.remove('playing');
}

function handleMouseDown() {
    const element = this.dataset.key;
    const audio = document.querySelector(`audio[data-key="${element}"]`);
    audio.currentTime = 0;
    audio.play();
    const key = document.querySelector(`div[data-key="${element}"]`);
    key.classList.add('playing'); 
}

function handleMouseUp() {
    const element = this.dataset.key;
    const key = document.querySelector(`div[data-key="${element}"]`);
    key.classList.remove('playing');
}

window.addEventListener('keydown', handleKeyDown);
window.addEventListener('keyup', handleKeyUp);

keys.forEach(key => {
    key.addEventListener('mousedown' , handleMouseDown);
    key.addEventListener('mouseup' , handleMouseUp);
});
