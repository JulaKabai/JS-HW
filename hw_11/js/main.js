const charactersButton = document.getElementById("characters-data");
const areaCharacters = document.querySelector("#area-data");
const planetsButton = document.getElementById("planets-data");

const getCharacterData = () =>
  axios.get("https://swapi.dev/api/films/2/").then((res) =>
    console.log(
      res.data.characters.forEach((item) => {
        axios.get(item).then((result) => {
					let characterElem = document.createElement('div');
					characterElem.className = 'character-elem';
					characterElem.innerHTML =  `<div id="content">
								<span> name : ${result.data.name}; </span>
								<span> gender : ${result.data.gender}; </span>
								<span> birth year : ${result.data.birth_year}; </span>
							</div>`;
							areaCharacters.appendChild(characterElem)
        });
      })
  ));

charactersButton .addEventListener("click", (event) => {
  while(areaCharacters.firstChild){
    areaCharacters.removeChild(areaCharacters.firstChild)
  }
  getCharacterData();
},{once : true});

getPlanetsData = () =>
  axios.get("https://swapi.dev/api/planets").then((result) =>
    result.data.results.forEach((item) => 
		{
			planetElem = document.createElement("div");
      planetElem.className = "character-elem";
      planetElem.innerHTML = `<div id="content">
						<span> name : ${item.name}; </span>
						<span> diameter: ${item.diameter}; </span>
						<span> population : ${item.population}; </span>
					</div>`;
          areaCharacters.append(planetElem);
    }
		)
  );
planetsButton.addEventListener("click", (event) => {
  while(areaCharacters.firstChild){
    areaCharacters.removeChild(areaCharacters.firstChild)
  }
  getPlanetsData();
},{once : true});
