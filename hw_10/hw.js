const animalsImages = document.getElementById('animal-images');
const images = ['pig', 'dog', 'lion', 'cat', 'birds', 'fox', 'cow', 'sheep'];
const keyCodeArr = ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK'];
const imgComponents = images.map((image, index) => {
    const imgButtons = document.createElement('img');
    imgButtons.setAttribute('src' , `./animal_img/${image}.jpg`);
    imgButtons.setAttribute('class', 'img-style');
    imgButtons.setAttribute('animals', image);
    animalsImages.appendChild(imgButtons);
});
animalsImages.addEventListener('click', (event) => {
    const songs = new Audio (`./animal_sonds/${event.target.attributes.animals.value}.mp3`); 
    songs.play();
    });
document.addEventListener('keydown' , (event) => {
    keyCodeArr.forEach((elem, index) => { 
        event.code === elem ? new Audio (`./animal_sonds/${images[index]}.mp3`).play() : event.stopPropagation();
    } );
})
