const cubeContainer = document.getElementById("cube-container");
const randColor = () => {
	return (
		"#" +
		Math.floor(Math.random() * 16777215)
			.toString(16)
			.padStart(6, "0")
			.toUpperCase()
	);
};

setInterval(() => {
	cubeContainer.innerHTML = '';
	for (let i = 0; i < 25; i++) {
		const cube = document.createElement("div");
		cubeContainer.appendChild(cube);
		cube.style.cssText = `height: 50px; width: 50px; background: ${randColor()}`;
	}
}, 1000);
