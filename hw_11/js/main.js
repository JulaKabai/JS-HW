const a = () => axios.get('https://swapi.dev/api/films/2/').then((result) => result);
const img = () => {a().then((result) => console.log(result.data.characters))};
console.log(img());