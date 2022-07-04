function* getInfinity() {
    let i = 1;
    while (true) {
        yield i++;
    }
}
const a = getInfinity();
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);

const topButton = document.getElementById("top-button");
const downButton = document.getElementById("down-button");
const text = document.getElementById("text");
function* fontGenerator(direction) {
    let fontSize = 14;
    let font 
    while (true) {
        font = yield;
        if(font === 'up'){
            text.style.fontSize = `${fontSize += 2}px`
        }else{
            text.style.fontSize = `${fontSize -= 2}px`
        }
    }
}
const generator = fontGenerator();
generator.next().value
topButton.addEventListener("click", (event) => {
    generator.next("up").value;
});
downButton.addEventListener("click", (event) => {
    generator.next("down").value;
});
