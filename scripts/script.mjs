// GENERAL
// add space background
document.body.style.background = "url(./images/stars-bg.jpg)";

// SCROLLING TEXT ---------------------------------------------------------------------------------
document.body.style.color = "#DFDA3B";
document.body.style.fontFamily = "Nanum Gothic, sans-serif";
document.body.style.fontWeight = "800";
document.body.style.letterSpacing = "8%";

const intro = document.getElementById("intro");
intro.style.textAlign = "center";
intro.style.width = "80%";
intro.style.margin = "auto";
intro.style.fontSize = "3rem";
intro.style.lineHeight = "1.4";
intro.style.position = "relative";
intro.style.top = "650px";
// intro.style.transform = "translate(-50%, -50%)";
// intro.style.overflow = "hidden";
// intro.style.perspective = "1000px";

// justify text
const pTags = document.querySelectorAll("p");
 pTags.forEach(pTag => {
	pTag.style.textAlign = "justify";
 });

 // BUTTON ---------------------------------------------------------------------------------
const button = document.querySelector("button");

button.style.marginTop = "2rem";
button.style.padding = "1rem 2rem";
button.style.backgroundColor = "#DFDA3B"
button.style.border = "none";
button.style.borderRadius = "50px";
button.style.fontWeight = "bold";
button.style.fontSize = "18px";

const buttonDiv = document.getElementById("button-div");
buttonDiv.style.textAlign = "center";

 // SCROLLING ---------------------------------------------------------------------------------
// set initial position
let yPos = 10; // Start offscreen at the bottom

// scrolling speed
const scrollSpeed = 0.5; // Adjust as needed

// Function to animate the text
function animateText() {
    // Update the position
    yPos -= scrollSpeed;

    // Apply transformation to the text for vertical scrolling
    intro.style.transform = `translateY(${yPos}px)`;

	// button reaches center 
	if (button.getBoundingClientRect().top <= window.innerHEight / 2) {
		// stop button from scrolling
		cancelAnimationFrame(animateText);
	} else {
		// continue scrolling
		requestAnimationFrame(animateText);

	}
}

// Start the animation
animateText();


// API ------------------------------------------------------------------------------------
// create function for grabbing all of the data
async function fetchData() {
	try {
	const resultPeople = await fetch (`https://www.swapi.tech/api/people/`);
	const resultPlanets = await fetch (`https://www.swapi.tech/api/planets/`);
	const resultStarships = await fetch (`https://www.swapi.tech/api/starships/`);
	const resultVehicles = await fetch (`https://www.swapi.tech/api/vehicles/`);

	const dataPeople = await resultPeople.json();
	const dataPlanets = await resultPlanets.json();
	const dataStarships = await resultStarships.json();
	const dataVehicles = await resultVehicles.json();
	
	console.log(dataPeople.results);

// create random index within array length
const randomPeople = Math.floor(Math.random() * dataPeople.results.length)
const people = dataPeople.results[randomPeople].name;
	console.log(people);

const randomPlanet = Math.floor(Math.random() * dataPlanets.results.length)
const planet = dataPlanets.results[randomPlanet].name;
	console.log(planet);

const randomStarship = Math.floor(Math.random() * dataStarships.results.length)
const starship = dataStarships.results[randomStarship].name;
	console.log(starship);
			
// alert message
const adventure = `You are going to help the New Empire by going to planet ${planet} with ${people} on the ${starship}.`

	// set up alert
	button.addEventListener("click", function() {
		alert(adventure);
	});

 	} catch (error) {
		console.error("There was a problem:", error);
	}
}
  fetchData();
