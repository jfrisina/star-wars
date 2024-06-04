// API ------------------------------------------------------------------------------------
// create function for grabbing all of the data
export async function fetchData() {
	// wrap code in a try/catch statement to troubleshoot errors. "error handling"
	try {
	// use Star Wars APIs to fetch data 
	const resultPeople = await fetch (`https://www.swapi.tech/api/people/`);
	const resultPlanets = await fetch (`https://www.swapi.tech/api/planets/`);
	const resultStarships = await fetch (`https://www.swapi.tech/api/starships/`);
	
	// turn data into json data so we can work with it easier
	const dataPeople = await resultPeople.json();
	const dataPlanets = await resultPlanets.json();
	const dataStarships = await resultStarships.json();

	// randomize and then target the desired data
	const randomPeople = Math.floor(Math.random() * dataPeople.results.length)
	const person = dataPeople.results[randomPeople].name;

	const randomPlanet = Math.floor(Math.random() * dataPlanets.results.length)
	const planet = dataPlanets.results[randomPlanet].name;

	const randomStarship = Math.floor(Math.random() * dataStarships.results.length)
	const starship = dataStarships.results[randomStarship].name;

	return { person, planet, starship };
	// set error message for if an error occurs
 	} catch (error) {
		console.error("There was a problem:", error);
	}
}

